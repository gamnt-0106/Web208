import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { PagesComponent } from './pages/pages.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { HeaderComponent } from './header/header.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomepageComponent } from './homepage/homepage.component';
import{HttpClientModule} from '@angular/common/http';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { HomeComponent } from './pages/home/home.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NzTableModule } from 'ng-zorro-antd/table';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    AboutComponent,
    ProductsComponent,
    PagesComponent,
    ProductAddComponent,
    HeaderComponent,
    ProductDetailComponent,
    HomepageComponent,
    NotfoundComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzTableModule

  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
