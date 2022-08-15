import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuTopoComponent } from './menu-topo/menu-topo.component';
import { RodapeComponent } from './rodape/rodape.component';
import { RouterModule } from '@angular/router';
import { LayoutRoutingModule } from './layout-routing.module';
import { BannerComponent } from '../filmes/banner/banner.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RodapeComponent,
    MenuTopoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    LayoutRoutingModule
  ],
  exports:[
    MenuTopoComponent,
    RodapeComponent,
  ]
})
export class LayoutModule { }
