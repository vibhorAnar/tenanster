import {User} from './UserModel';

export interface UpdatePropertyInput {
  name?: Nullable<string>;
  description?: Nullable<string>;
  ownerId?: Nullable<string>;
  rentAmount?: Nullable<number>;
  mainImage?: Nullable<string>;
  images?: Nullable<string[]>;
  amenities?: Nullable<string[]>;
  bedrooms?: Nullable<number>;
  bathrooms?: Nullable<number>;
  furnishingType?: Nullable<string>;
}

export interface Location {
  type?: Nullable<string>;
  coordinates?: Nullable<number[]>;
}

export interface Property {
  _id: string;
  name?: Nullable<string>;
  description?: Nullable<string>;
  address?: Nullable<string>;
  state?: Nullable<string>;
  city?: Nullable<string>;
  zipCode?: Nullable<string>;
  ownerId?: Nullable<string>;
  location?: Nullable<Location>;
  rentAmount?: Nullable<number>;
  status?: Nullable<string>;
  owner: User;
  createdAt: DateTime;
  updatedAt: DateTime;
  propertyType: string;
  size: number;
  amenities?: Nullable<string[]>;
  images?: Nullable<string[]>;
  mainImage: string;
  bedrooms: number;
  bathrooms: number;
  furnishingType: string;
}

export interface CreatePropertyInput {
  name: string;
  description: string;
  address: string;
  state: string;
  city: string;
  furnishingType: string;
  zipCode: string;
  cordinates?: number[];
  size: number | string;
  rentAmount: number | string;
  propertyType: string;
  mainImage: string;
  images: string[];
  amenities: string[];
  bedrooms: number | string;
  bathrooms: number | string;
}

export type DateTime = any;
type Nullable<T> = T | null;
