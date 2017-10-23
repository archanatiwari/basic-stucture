/**
 * @angular dependency
 */ 
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

/**
 * Module and Component Dependency
 */
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RepairModule } from './repair/repair.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RepairModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
