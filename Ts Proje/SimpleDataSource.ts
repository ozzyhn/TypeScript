import { Product } from "./product";
export class SimpleDataSource{
    private products: Array<Product>;

    constructor(){
        this.products= new Array<Product>(
            new Product(1,"Samsung S5","Telefon",1000),
            new Product(1,"Samsung S6","Telefon",1000),
            new Product(1,"Samsung S7","Telefon",1000),
            new Product(1,"Samsung S8","Telefon",1000),
        );
        
    }

    getProducts(): Product[]{
        return this.products;
    }
}
