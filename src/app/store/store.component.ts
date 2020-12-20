import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
import { Cart } from "../model/cart.model";
import { Router } from "@angular/router";

@Component({
    selector:"store",
    templateUrl:"store.component.html"
})

export class StoreComponent{
    public selectedCategory = null;
    public productPerPage = 4; 
    public selectedPage = 1;


    constructor(private repository: ProductRepository, 
                private cart:Cart,
                private router: Router){}

    get products(): Product[] {
        return this.repository.getProducts(this.selectedCategory);
    }

    get categories(): string[] {
        return this.repository.getCategories();
    }

    changeCategory(newCategory?:string){
        this.selectedCategory = newCategory;
    }

    changePage(newPage: number){
        this.selectedPage = newPage;
    }

    changePageSize(newSize: number){
        this.productPerPage = Number(newSize);
        this.changePage(1);
    }

    get pageCount(): number {

        return Math.ceil(this.repository
            .getProducts(this.selectedCategory).length / this.productPerPage);
    }

    addProductToCart(product: Product){
        this.cart.addLine(product);
        this.router.navigateByUrl("/cart");
    }

}