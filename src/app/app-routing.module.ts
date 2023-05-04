import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './components/banner/banner.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { IndexComponent } from './components/index/index.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { LoginComponent } from './components/login/login.component';
import { GuardGuard } from './servicios/guard.service';
import { ModalExperienciaComponent } from './components/modales/modal-experiencia/modal-experiencia.component';
import { AddProyectoComponent } from './components/modales/add-proyecto/add-proyecto.component';



const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'navbar', component: NavbarComponent,canActivate:[GuardGuard]},   //, canActivate:[GuardGuard},
  {path: 'login', component: LoginComponent},
  {path: 'banner/:id', canActivate:[GuardGuard],component: BannerComponent},
  {path: 'experiencia/:id', canActivate:[GuardGuard],component: ExperienciaComponent},
  {path: 'educacion/:id' , canActivate:[GuardGuard],component: EducacionComponent},
  {path: 'habilidades/:id' , canActivate:[GuardGuard],component: HabilidadesComponent},
  {path: 'proyectos/persona', canActivate: [GuardGuard], component: ProyectosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'agregar-proyecto', component: AddProyectoComponent},
  {path: 'editExperiencia/:id', canActivate: [GuardGuard],  component: ModalExperienciaComponent},
  {path: '', redirectTo:'/index', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
