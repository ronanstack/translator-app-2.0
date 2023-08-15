import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputBoxComponent } from './input-box/input-box.component';
import { OutputBoxComponent } from './output-box/output-box.component';
import { SourceDropdownComponent } from './source-dropdown/source-dropdown.component';
import { TargetDropdownComponent } from './target-dropdown/target-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    InputBoxComponent,
    OutputBoxComponent,
    SourceDropdownComponent,
    TargetDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
