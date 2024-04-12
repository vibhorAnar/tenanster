import {Property} from './PropertyModel';
import {User} from './UserModel';

export interface CreateLeaseInput {
  tenantId: string;
  propertyId: string;
  rentAmount: number;
}

export interface UpdateLeaseInput {
  tenantId: string;
  propertyId: string;
  rentAmount: number;
}

export interface Lease {
  tenantId?: Nullable<string>;
  propertyId?: Nullable<string>;
  rentAmount: number;
  status: string;
  tenant: User;
  property: Property;
}
type Nullable<T> = T | null;
