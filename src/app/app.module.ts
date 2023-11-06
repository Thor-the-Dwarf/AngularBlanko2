import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirektivenComponent } from './struktur-direktiven/direktiven.component';
import {FormsModule} from "@angular/forms";
import { BindingComponent } from './binding-direktiven/binding.component';

@NgModule({
  declarations: [
    AppComponent,
    DirektivenComponent,
    BindingComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
