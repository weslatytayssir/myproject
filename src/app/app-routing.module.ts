import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent} from './connexion/connexion.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AboutComponent } from './accueil/about/about.component';

const routes: Routes = [
  {path:'',component:AccueilComponent},
 {path:'connexion',component:ConnexionComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
