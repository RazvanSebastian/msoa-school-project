import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService, Contact } from '../shared/product.service';

@Component({
	selector: 'app-contact-us',
	templateUrl: './contact-us.component.html',
	styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

	contact:any;
	form:FormGroup;

	constructor(
		private _formBuilder : FormBuilder,
		private _productService : ProductService
		) { }

	ngOnInit() {
		this.contact = new Contact();
		this.form = this._formBuilder.group({
			name : ["", Validators.required],
			email : ["", Validators.required],
			comment : ["", Validators.required],
		});
	}

	onSubmitSaveContact(){
		this._productService.saveContact(this.contact).subscribe(
			data => {
				window.alert("We received your message!");
			},
			err => {
				window.alert(err);
			}
		);
	}

}
