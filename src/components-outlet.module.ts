import { NgModule, ModuleWithProviders, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsOutletDirective } from './components-outlet.directive';
import { COMPONENTS_OUTLET_CONFIG, ComponentOutletConfig } from './components-outlet-config';
import { isArray } from 'lodash';

export function provideComponentOutletConfig(componentOutletConfig?: ComponentOutletConfig | ComponentOutletConfig[]): Provider[] {
  componentOutletConfig = componentOutletConfig || [];
  if (!isArray(componentOutletConfig)) componentOutletConfig = [componentOutletConfig];

  return componentOutletConfig.map(config => ({
    provide: COMPONENTS_OUTLET_CONFIG,
    multi: true,
    useValue: config
  }));
}

export function provideModule(componentOutletConfig?: ComponentOutletConfig | ComponentOutletConfig[]): ModuleWithProviders {
  return {
    ngModule: ComponentsOutletModule,
    providers: [provideComponentOutletConfig(componentOutletConfig)]
  };
}

@NgModule({
  imports: [CommonModule],
  declarations: [ComponentsOutletDirective],
  exports: [ComponentsOutletDirective]
})
export class ComponentsOutletModule {
  static forRoot = provideModule;
  static forChild = provideModule;
}