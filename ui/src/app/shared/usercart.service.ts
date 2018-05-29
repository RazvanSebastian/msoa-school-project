import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Product } from './product.service';

@Injectable()
export class UsercartService {

	constructor(
		private _http : Http
		) { }

	saveUserCart(user,products,price){
		let userorder = new UserOrder();
		userorder.user = user;
		userorder.products = products;
		userorder.price = price;
		return this._http.post("http://localhost/api/resource/usercart.php",JSON.stringify(userorder));
	}
}

export class User{
	public email:string;
	public firstname:string;
	public lastname:string;
	public address:string;
	public phone:string;

	constructor(){}
}

export class UserOrder{
	public user:User;
	public products:any;
	public price:number;

	constructor(){}
}