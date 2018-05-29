import { Component, OnInit } from '@angular/core';
import { OrderService, Order } from '../shared/order.service';

@Component({
	selector: 'app-order-history',
	templateUrl: './order-history.component.html',
	styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

	email : string;
	orders = [];

	constructor(
		private _orderService : OrderService
		) { }

	ngOnInit() {
	}

	onFindSubmit(){
		this._orderService.findOrders(this.email).subscribe(
			data => {
				console.log(data.text());
				let results = JSON.parse(data.text());
				console.log(results);
				for (var i = results.length - 1; i >= 0; i--) {
					results[i].products = JSON.parse(results[i].products);
					this.orders[i] = results[i]; 
				}
				console.log(this.orders);
			},
			err => {console.log(err)}
			);
	}

}
