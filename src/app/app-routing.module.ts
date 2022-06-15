import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BlogComponent } from './blog/blog.component';
import { HelloComponent } from './hello/hello.component';
import { HomeComponent } from './pages/home/home.component';
import {AuthGuard} from './services/admin/auth.guard';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { WorksComponent } from './works/works.component';

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:'full'},
  
  {path:'hello',component:HelloComponent},
  {path:'blog',component:BlogComponent},
  {path:'work',component:WorksComponent},
  {path:'product',component:ProductsComponent},
  {path:'product/add',component:ProductAddComponent},
  {path:'product/:id',component:ProductDetailComponent},
  { path: "product/edit/:id", component: ProductAddComponent },
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'**',component:NotfoundComponent},
   

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
