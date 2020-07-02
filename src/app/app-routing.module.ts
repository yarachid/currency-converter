import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConvertionPageComponent} from './convertion-page/convertion-page.component';
import {AboutPageComponent} from './about-page/about-page.component';

const routes: Routes = [
  {path: '', component: ConvertionPageComponent },
  {path: 'about', component: AboutPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
