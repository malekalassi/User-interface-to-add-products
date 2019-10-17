import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterailModule } from '../app/app-materail/app-materail.module'
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { UrunComponent } from './urun/urun.component';
import { MarkaComponent } from './marka/marka.component';
import { UrunozellikComponent } from './urunozellik/urunozellik.component';
import { UrundetailComponent } from './urundetail/urundetail.component';
import { KategoriComponent } from './kategori/kategori.component';
import { DxSelectBoxModule, DxListModule, DxTemplateModule } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PosturunComponent } from './posturun/posturun.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    UrunComponent,
    MarkaComponent,
    UrunozellikComponent,
    UrundetailComponent,
    KategoriComponent,
    PosturunComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterailModule,
    BrowserModule,
    DxSelectBoxModule,
    DxListModule,
    DxTemplateModule,
    HttpClientModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
