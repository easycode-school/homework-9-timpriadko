import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { SortByPipe } from './pipes/sort-by.pipe';
import { TimeSincePipe } from './pipes/time-since.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SortByPipe,
    TimeSincePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
