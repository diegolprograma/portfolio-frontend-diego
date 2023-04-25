import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { ModalBannerComponent } from './components/modales/modal-banner/modal-banner.component';
import { ModalExperienciaComponent } from './components/modales/modal-experiencia/modal-experiencia.component';
import { ModalEducacionComponent } from './components/modales/modal-educacion/modal-educacion.component';
import { ModalHabilidadesComponent } from './components/modales/modal-habilidades/modal-habilidades.component';
import { ModalProyectosComponent } from './components/modales/modal-proyectos/modal-proyectos.component';
import { ModalContactoComponent } from './components/modales/modal-contacto/modal-contacto.component';
import { ModalLoginComponent } from './components/modales/modal-login/modal-login.component';
import { ModalLogoutComponent } from './components/modales/modal-logout/modal-logout.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ModalHobbiesComponent } from './components/modales/modal-hobbies/modal-hobbies.component';
import { CrearBannerComponent } from './components/modales/crear-banner/crear-banner.component';
import { CrearExperienciaComponent } from './components/modales/crear-experiencia/crear-experiencia.component';
import { CrearEducacionComponent } from './components/modales/crear-educacion/crear-educacion.component';
import { CrearHabilidadesComponent } from './components/modales/crear-habilidades/crear-habilidades.component';
import { CrearProyectosComponent } from './components/modales/crear-proyectos/crear-proyectos.component';
import { CrearHobbiesComponent } from './components/modales/crear-hobbies/crear-hobbies.component';
import { EliminarBannerComponent } from './components/modales/eliminar-banner/eliminar-banner.component';
import { EliminarExperienciaComponent } from './components/modales/eliminar-experiencia/eliminar-experiencia.component';
import { EliminarEducacionComponent } from './components/modales/eliminar-educacion/eliminar-educacion.component';
import { EliminarHabilidadesComponent } from './components/modales/eliminar-habilidades/eliminar-habilidades.component';
import { EliminarProyectosComponent } from './components/modales/eliminar-proyectos/eliminar-proyectos.component';
import { EliminarHobbiesComponent } from './components/modales/eliminar-hobbies/eliminar-hobbies.component';
import { CrearRedComponent } from './components/modales/crear-red/crear-red.component';
import { PersonaService } from './servicios/persona.service';
import { InterceptorService } from './servicios/interceptor.service';

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
    IndexComponent,
    ModalBannerComponent,
    ModalExperienciaComponent,
    ModalEducacionComponent,
    ModalHabilidadesComponent,
    ModalProyectosComponent,
    ModalContactoComponent,
    ModalLoginComponent,
    ModalLogoutComponent,
    LoginComponent,
    LogoutComponent,
    ModalHobbiesComponent,
    CrearBannerComponent,
    CrearExperienciaComponent,
    CrearEducacionComponent,
    CrearHabilidadesComponent,
    CrearProyectosComponent,
    CrearHobbiesComponent,
    EliminarBannerComponent,
    EliminarExperienciaComponent,
    EliminarEducacionComponent,
    EliminarHabilidadesComponent,
    EliminarProyectosComponent,
    EliminarHobbiesComponent,
    CrearRedComponent
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
