import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from './shared/card/card.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserContainerComponent } from './user/user-container/user-container.component';
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    UserListComponent,
    UserContainerComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
