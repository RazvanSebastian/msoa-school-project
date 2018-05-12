import { Component, OnInit } from '@angular/core';
import { ProductService,Product } from '../shared/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cart } from '../shared/cart';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

	productList:any;
  editableProduct:any;
  form:FormGroup;
  isSubmit=false;
  cart:Cart;

  constructor(
  	private _productService : ProductService,
    private _formBuilder : FormBuilder,
    private _appComponent : AppComponent
    ) { }

  ngOnInit() {
    this.cart = new Cart();
    this.editableProduct = new Product();
  	this.getProductList();
    this.form = this._formBuilder.group({
      name : ["", Validators.required],
      description : ["", Validators.required],
      image : ["", Validators.required],
      price : ["", Validators.required]
    });
  }

  getProductList(){
  	this._productService.findAll().subscribe(
  		data => { 
  			this.productList = JSON.parse(data.text()); 
        console.log(this.productList);
      },
      err => {
        window.alert(err);
      }
      );
  }

  onRemoveSubmit(product){
    console.log(product);
    this._productService.delete(product.id).subscribe(
      data => {
        window.alert(data.text());
        for (var i = this.productList.length - 1; i >= 0; i--) {
          if(this.productList[i].id == product.id){
            this.productList.splice(i,1);
            break;
          }
        }
      },
      err => {
        window.alert(err);
      }
      );
  }

  onEditProduct(product){
    this.editableProduct = product;
    this.isSubmit = false;
  }

  onEditSubmit(){
    console.log(this.editableProduct);
    this._productService.update(this.editableProduct).subscribe(
      data => {
        for (var i = this.productList.length - 1; i >= 0; i--) {
          if(this.productList[i].id == this.editableProduct.id){
            this.productList[i] = this.editableProduct;
            break;
          }
        }
        this.isSubmit = true;
      },
      err => {
        window.alert(err);
      }
      );
  }

  onAddToCartSubmit(product){
    this.cart.addToCart(product);
    this._appComponent.noProducts = this.cart.getNoProducts();
  }

}
