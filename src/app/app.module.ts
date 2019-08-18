import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LaunchesListComponent } from './launches-list/launches-list.component';
import { LaunchesListItemComponent } from './launches-list-item/launches-list-item.component';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      LaunchesListComponent,
      LaunchesListItemComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
