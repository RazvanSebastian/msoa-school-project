import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductService {

  constructor(
  	private _http : Http
  	) { }

  findAll(){
  	return this._http.get("http://localhost/api/resource/list.php");
  }

  delete(id){
  	return this._http.get("http://localhost/api/resource/delete.php?id="+id);
  }

  update(product){
    return this._http.post("http://localhost/api/resource/update.php",JSON.stringify(product));
  }

  save(product){
    return this._http.post("http://localhost/api/resource/save.php",JSON.stringify(product));
  }

  saveContact(contact){
    return this._http.post("http://localhost/api/resource/contactus.php",JSON.stringify(contact));
  }

}

export class Product{

	public id:number;
	public name:string;
	public description:string;
	public price:number;
	public created:any;
	public imageURI:string;

	constructor(){}
}

export class Contact{
  public name:string;
  public email:string;
  public comment:string;

  constructor(){}
}
