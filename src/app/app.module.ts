import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ButtonBoxComponent } from './components/button-box/button-box.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ButtonBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
