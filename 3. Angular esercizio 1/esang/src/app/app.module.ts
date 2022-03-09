import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from './shared/card/card.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserContainerComponent } from './user/user-container/user-container.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { OrderContainerComponent } from './order/order-container/order-container.component';
import { OrderSingleComponent } from './order/order-single1/order-single/order-single.component';
import { OrderListComponent } from './order/order-single1/order-list/order-list.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';
import { UserSingleComponent } from './order/order-single1/user-single/user-single.component';
import { OrderList2Component } from './order/order-single2/order-list2/order-list2.component';
import { OrderSingle2Component } from './order/order-single2/order-single2/order-single2.component';
import { UserSingle2Component } from './order/order-single2/user-single2/user-single2.component';
import { OrderList3Component } from './order/order-single3/order-list3/order-list3.component';
import { OrderSingle3Component } from './order/order-single3/order-single3/order-single3.component';
import { UserSingle3Component } from './order/order-single3/user-single3/user-single3.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    UserListComponent,
    UserContainerComponent,
    UserDetailComponent,
    OrderContainerComponent,
    OrderSingleComponent,
    OrderListComponent,
    OrderDetailComponent,
    UserSingleComponent,
    OrderList2Component,
    OrderSingle2Component,
    UserSingle2Component,
    OrderList3Component,
    OrderSingle3Component,
    UserSingle3Component
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
