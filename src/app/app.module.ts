import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { FooterComponent } from './shared-components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material-module';

@NgModule({
  imports:      [ BrowserModule, RouterOutlet, AppRoutingModule, MaterialModule ],
  declarations: [ AppComponent, HeaderComponent, FooterComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }