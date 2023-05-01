import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { IndexComponent } from './components/index/index.component';



import { PersonaService } from './servicios/persona.service';
import { InterceptorService } from './servicios/interceptor.service';
import { ModalBannerComponent } from './components/modales/modal-banner/modal-banner.component';

import { ModalExoerienciaComponent } from './components/modales/modal-exoeriencia/modal-exoeriencia.component';
import { ModalHabilidadesComponent } from './components/modales/modal-habilidades/modal-habilidades.component';
import { ModalProyectosComponent } from './components/modales/modal-proyectos/modal-proyectos.component';
import { ModalHobbiesComponent } from './components/modales/modal-hobbies/modal-hobbies.component';
import { ModalRedComponent } from './components/modales/modal-red/modal-red.component';
import { AddBannerComponent } from './components/modales/add-banner/add-banner.component';
import { AddEexperienciaComponent } from './components/modales/add-experiencia/add-eexperiencia.component';
 
import { AddHobbiesComponent } from './components/modales/add-hobbies/add-hobbies.component';
import { AddRedComponent } from './components/modales/add-red/add-red.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AddHabilidadComponent } from './components/modales/add-habilidad/add-habilidad.component';
import { AddProyectoComponent } from './components/modales/add-proyecto/add-proyecto.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    HobbiesComponent,
    ContactoComponent,
    LoginComponent,
    IndexComponent,
 
    
      ModalBannerComponent,
      ModalExoerienciaComponent,
      ModalHabilidadesComponent,
      ModalProyectosComponent,
      ModalHobbiesComponent,
      ModalRedComponent,
      AddBannerComponent,
      AddEexperienciaComponent,
      AddHabilidadComponent,
      AddProyectoComponent,
      AddHobbiesComponent,
      AddRedComponent,
      LogoutComponent,
      

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PersonaService,
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
