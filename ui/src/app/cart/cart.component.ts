import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/cart';
import { AppComponent } from '../app.component';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

	cart:Cart;
	list:any;
	total = 0;

	constructor(
		private _appcomponent : AppComponent
		) { }

	ngOnInit() {
		this.cart = new Cart();
		this.list = this.cart.getProductList();
		for (var i = this.list.length - 1; i >= 0; i--) {
			this.total = (+this.total) + (+this.list[i].price);
		}
	}

	onRemoveFromCart(index){
		this.total =(+this.total) - (+this.list[index].price);
		this.list = this.cart.removeFromCart(this.list,index);
		this._appcomponent.noProducts --;
	}
}
