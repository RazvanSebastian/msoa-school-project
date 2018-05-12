export class Cart{

	constructor(){}

	setNoProducts(no){
		localStorage.setItem("noProducts",no);
	}

	setProductList(list){
		localStorage.setItem("list",JSON.stringify(list));
	}

	getNoProducts(){
		let no = localStorage.getItem("noProducts");
		if(no == null)
			return 0;
		else
			return +no;
	}

	getProductList(){
		let list = localStorage.getItem("list");
		if(list == null)
			return [];
		else 
			return JSON.parse(list);
	}

	addToCart(product){
		let list = this.getProductList();
		list.push(product);
		this.setProductList(list);

		let no = this.getNoProducts();
		no++;
		this.setNoProducts(no);
	}

	removeFromCart(list,index){
		list.splice(index,1);
		this.setProductList(list);
		this.setNoProducts(list.length);
		return list;
	}
}