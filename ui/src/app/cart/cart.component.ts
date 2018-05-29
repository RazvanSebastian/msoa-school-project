import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { Cart } from '../shared/cart';
import { UsercartService, User } from '../shared/usercart.service';
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
	userForm : FormGroup;
	user : User;

	constructor(
		private _appcomponent : AppComponent,
		private _formBuilder : FormBuilder,
		private _userCartService : UsercartService
		) { }

	ngOnInit() {
		this.cart = new Cart();
		this.user = new User();

		this.list = this.cart.getProductList();
		for (var i = this.list.length - 1; i >= 0; i--) {
			this.total = (+this.total) + (+this.list[i].price);
		}
		this.userForm = this._formBuilder.group({
			email : ["", Validators.pattern("^([a-z0-9_\\.-]+)@([\\da-z\\.-]+)\\.([a-z\\.]{2,6})$")],
			firstname : ["", Validators.required],
			lastname : ["", Validators.required],
			address : ["", Validators.required],
			phone : ["", [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"), Validators.required]]
		});
	}

	onRemoveFromCart(index){
		this.total =(+this.total) - (+this.list[index].price);
		this.list = this.cart.removeFromCart(this.list,index);
		this._appcomponent.noProducts --;
	}

	onSaveCartSubmit(){		
		this._userCartService.saveUserCart(this.user, this.list, this.total).subscribe(
			data => {
				window.alert("Cart save succes!");
				this.user = new User();
				this.list = [];
				this.total = 0;
				this.cart.setNoProducts(0);
				this.cart.setProductList([]);
				this._appcomponent.noProducts = 0;
			},
			err => {
				window.alert("Something went wrong!");
				console.log(err);
			}
			);
	}
}
