import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {ServiceItemComponent} from './components/service-item/service-item.component';
import {ServiceFormComponent} from './components/service-form/service-form.component';
import {ServiceTrayComponent} from './components/service-tray/service-tray.component';
import {FilterTypePipe} from './pipes/filter-type.pipe';
import {SelectModule} from 'ng-select';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SelectModule
  ],
  declarations: [
    ServiceItemComponent,
    ServiceFormComponent,
    ServiceTrayComponent,
    FilterTypePipe
  ]
})
export class ServicesModule {
}
