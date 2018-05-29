import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class OrderService {

	constructor(
		private _http:Http
		) { }

	findOrders(email){
		return this._http.get("http://localhost/api/resource/orderhistory.php?email="+email);
	}
}

export class Order{

	public id : number;
	public products : string;
	public price : number;

	constructor(id,products,price){
		this.id = id;
		this.products = JSON.parse(products);
		this.price = price;
	}
}
