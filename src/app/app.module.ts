import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirektivenComponent } from './2_struktur-direktiven/direktiven.component';
import {FormsModule} from "@angular/forms";
import { BindingComponent } from './1_binding-direktiven/binding.component';
import { ParentComponent } from './3_Komponenten_Kommunikation/parent/parent.component';
import { ChildComponent } from './3_Komponenten_Kommunikation/child/child.component';
import { SpeichernComponent } from './4_speichern/speichern.component';

@NgModule({
  declarations: [
    AppComponent,
    DirektivenComponent,
    BindingComponent,
    ParentComponent,
    ChildComponent,
    SpeichernComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
