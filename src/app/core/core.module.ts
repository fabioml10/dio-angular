import { NgModule } from "@angular/core";
import { Navbar } from './component/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    Navbar
  ],
  imports: [
    RouterModule
  ],
  exports: [
    Navbar
  ]
})

export class CoreModule { }
