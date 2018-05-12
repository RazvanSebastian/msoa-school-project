import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product, ProductService } from '../shared/product.service';

@Component({
	selector: 'app-new-product',
	templateUrl: './new-product.component.html',
	styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

	form:FormGroup;
	newProduct:any;
	datePipe:any;

	constructor(
		private _productService : ProductService,
		private _formBuilder : FormBuilder
		) { }

	ngOnInit() {
		this.newProduct = new Product();
		this.form = this._formBuilder.group({
			name : ["", Validators.required],
			description : ["", Validators.required],
			image : ["", Validators.required],
			price : ["", Validators.required]
		});
	}

	onNewSubmit(){
		let date = new Date();
		this.newProduct.created =date.toISOString().split("T")[0];
		this._productService.save(this.newProduct).subscribe(
			data => {
				window.alert("Save product successfully!");
				this.newProduct = new Product();
			},
			err => {
				window.alert(err);
			}
			);
	}
}
