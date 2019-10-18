import { AktuelComponent } from './aktuel/aktuel.component';
import { KategoriComponent } from './kategori/kategori.component';
import { UrunozellikComponent } from './urunozellik/urunozellik.component';
import { MarkaComponent } from './marka/marka.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UrundetailComponent } from './urundetail/urundetail.component';
import { PosturunComponent } from './posturun/posturun.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent

  },
  {
    path: 'marka',
    component: MarkaComponent
  },
  {
    path: 'urunozellik',
    component: UrunozellikComponent
  },
  {
    path: 'urundetail',
    component: UrundetailComponent
  },
  {
    path: 'kategori',
    component: KategoriComponent
  },
  {
    path: 'posturun',
    component: PosturunComponent
  },
  {
    path: 'aktuel',
    component: AktuelComponent
  }
]


@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
