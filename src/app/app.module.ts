import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    ShopComponent,
    AlbumDetailComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
