import { NgModule } from "@angular/core";
import { Navbar } from './component/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from './component/404/404.component';

@NgModule({
  declarations: [
    Navbar,
    Error404Component
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '**', component: Error404Component
      }
    ])
  ],
  exports: [
    Navbar
  ]
})

export class CoreModule { }
