import Logger from '@helpers/logger';
import IORedis from 'ioredis';

const { REDIS_HOST = 'localhost', REDIS_PORT = '6379' } = process.env;

class Cache {
  private readonly redisClient: IORedis.Redis;

  constructor() {
    this.redisClient = new IORedis({
      port: Number.parseInt(REDIS_PORT, 10),
      host: REDIS_HOST,
      enableReadyCheck: true,
    });

    this.redisClient.on('error', (e) => Logger.error(`Redis threw an Error: ${e.message}`));
    this.redisClient.on('connect', () => Logger.info('Redis connect'));
    this.redisClient.on('close', () => Logger.info('Redis disconnected'));
    this.redisClient.on('end', () => Logger.info('Redis ended'));
    this.redisClient.on('ready', () => Logger.debug('Redis ready'));
    this.redisClient.on('reconnecting', () => Logger.debug('Redis reconnecting'));
  }

  private get isReady(): boolean {
    if (!this.redisClient) {
      return false;
    }
    const ready = this.redisClient.status === 'ready';
    Logger.debug(`Redis is ${ready ? '' : 'not '}ready`);

    return ready;
  }

  async getAsync(key: string, parse?: false): Promise<string | null>;

  async getAsync<T>(key: string, parse: true): Promise<T | null>;

  async getAsync<T>(key: string, parse?: boolean) {
    if (!this.isReady) {
      return null;
    }
    Logger.debug(`Getting value for ${key}`);

    return new Promise((resolve, reject) => {
      this.redisClient.get(key, (error, result) => {
        if (error) {
          Logger.error(error);
          reject(error);
        }
        if (result !== null) {
          Logger.debug(`Redis Cache HIT for ${key}`);
          if (parse) {
            resolve(JSON.parse(result) as T);
          }
          resolve(result as string);
        }
        Logger.debug(`Redis Cache MISS for ${key}`);
        resolve(null);
      });
    });
  }

  /**
   * Stores Async to Redis
   * @param key - Redis Key
   * @param value - Value
   * @param ttl - TTL in seconds
   */
  async setAsync(key: string, value: string, ttl = 20): Promise<'OK'> {
    if (!this.isReady) {
      return 'OK';
    }
    Logger.debug(`Setting value for ${key}. Expires in ${ttl}s`);

    return new Promise((resolve, reject) => {
      this.redisClient.set(key, value, 'EX', ttl, (error, result) => {
        if (error) {
          Logger.error('Encountered an error while inserting Key into Redis.');
          Logger.error(error);
          reject(error);
        }
        resolve(result);
      });
    });
  }
}

// eslint-disable-next-line import/no-default-export
export default new Cache();
