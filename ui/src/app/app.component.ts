import { Component } from '@angular/core';
import { Cart } from './shared/cart';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	cart = new Cart();
	noProducts : number;

	constructor(){
		this.noProducts = this.cart.getNoProducts();
	 }

  title = 'app';
}
