import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CarouselBasicComponent } from './carousel-basic/carousel-basic.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselBasicComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
