export type Filters = {
  make: string[];
  model: Record<string, string[]>;
  category: string[];
  gearbox: string[];
  doors: string[];
  carCondition: string[];
  emissionClass: string[];
  exteriorColor: string[];
  interiorColor: string[];
  fuel: string[];
  climatisation: string[];
  interiorType: string[];
  __typename: 'Filters';
};

export type HTTPFilterBody = {
  'make-model'?: string;
  category?: string;
  gearbox?: string;
  fuel?: string;
  exteriorColor?: string;
  mileage?: string;
  power?: string;
  price?: string;
};

export type FormikFilters = {
  make?: string;
  model?: string;
  category?: string;
  gearbox?: string;
  exteriorColor?: string;
  fuel?: string;
  mileage: {
    from: string;
    to: string;
  };
  power: {
    from: string;
    to: string;
  };
  price: {
    from: string;
    to: string;
  };
};
