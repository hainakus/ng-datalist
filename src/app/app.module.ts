import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatalistComponent } from './datalist/datalist.component';
import { BreakPipe } from './datalist/break.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DatalistComponent,
    BreakPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [
   
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
