import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AptitudesComponent } from './componentes/aptitudes/aptitudes.component';
import { HttpClientModule } from '@angular/common/http';
import { AcercaComponent } from './componentes/acerca/acerca.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { LoginComponent } from './componentes/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';
import { EditeducacionComponent } from './componentes/educacion/editeducacion.component';
import { NewexperienciaComponent } from './componentes/experiencia/newexperiencia.component';
import { EditexperienciaComponent } from './componentes/experiencia/editexperiencia.component';

const appRoutes:Routes=[
  {path:'', component:HomeComponent },
  {path:'login', component:LoginComponent },
  {path:'nuevaedu', component:NeweducacionComponent},
  {path:'nuevaexp', component:NewexperienciaComponent},
  {path:'editedu/:id', component:EditeducacionComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AptitudesComponent,
    AcercaComponent,
    ExperienciaComponent,
    EducacionComponent,
    LoginComponent,
    HomeComponent,
    ProyectosComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    NewexperienciaComponent,
    EditexperienciaComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
