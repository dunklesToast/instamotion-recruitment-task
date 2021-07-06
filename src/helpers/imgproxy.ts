/**
 * Generates URLs for the imgproxy so I can improve the PSI because we do not load huge images
 */
export function generateImgProxyUrl(url: string, size: string): string {
  return `https://images.nxtlevel.software/insecure/rs:fill:${size}/g:no/${Buffer.from(
    url
  ).toString('base64')}`;
}
