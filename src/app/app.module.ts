import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GuestListComponent } from './guest-list/guest-list.component';
import { GuestTableComponent } from './guest-table/guest-table.component';

@NgModule({
  declarations: [
    AppComponent,
    GuestListComponent,
    GuestTableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
