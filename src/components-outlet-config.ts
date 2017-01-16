import { OrderedComponent } from './ordered-component';
import { OpaqueToken } from '@angular/core';

export const COMPONENTS_OUTLET_CONFIG = new OpaqueToken('COMPONENTS_OUTLET_CONFIG');

export interface ComponentOutletConfig {
  name: string;
  orderedComponents: OrderedComponent[];
}