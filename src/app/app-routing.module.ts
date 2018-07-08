import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ServiceTrayComponent} from './modules/services/components/service-tray/service-tray.component';

const routes: Routes = [
  {
    path: '',
    component: ServiceTrayComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
