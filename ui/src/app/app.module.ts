import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CartComponent } from './cart/cart.component';
import { OrderHistoryComponent } from './order-history/order-history.component';

import { ProductService } from './shared/product.service';
import { UsercartService } from './shared/usercart.service';
import { OrderService } from './shared/order.service';

@NgModule({
	declarations: [
	AppComponent,
	HomeComponent,
	ProductListComponent,
	NewProductComponent,
	AboutComponent,
	ContactUsComponent,
	CartComponent,
	OrderHistoryComponent
	],
	imports: [
	BrowserModule,
	HttpModule,
	FormsModule,
	ReactiveFormsModule,
	RouterModule.forRoot([
	{
		path : 'home',
		component : HomeComponent
	},
	{
		path : 'products',
		component : ProductListComponent
	},
	{
		path : 'add-product',
		component : NewProductComponent
	},
	{
		path : 'about',
		component : AboutComponent
	},
	{
		path : "contact",
		component : ContactUsComponent
	},
	{
		path: "cart",
		component: CartComponent
	},
	{
		path:"order-history",
		component: OrderHistoryComponent
	},
	{
		path: '', 
		redirectTo: 'home', 
		pathMatch: 'full'
	}
	])
	],
	providers: [ProductService, UsercartService, OrderService],
	bootstrap: [AppComponent]
})
export class AppModule { }
