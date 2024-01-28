import { RouterModule, Routes, RoutesRecognized } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import path from 'path';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';

export const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'categoria',component:CategoriaComponent},
  {path:'sobre',component:SobreComponent},
  {path:'contato',component:ContatoComponent},
  {path: '**', component: PagenotfoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }