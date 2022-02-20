import { Component, OnInit } from '@angular/core';
import {
  GetAllProductsAction,
  GetSelectedProductsAction,
  ProductsActionsTypes,
  SearchProductsAction
} from "../../../ngrx/products.actions";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {ProductsState} from "../../../ngrx/products.reducer";

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {
  state:ProductsState|null=null;
  readonly ProductsActionsTypes=ProductsActionsTypes;
  constructor( private store:Store<any>, private router:Router) { }

  ngOnInit(): void {
    this.store.subscribe(state=>{
      this.state=state.catalogState;
    });
  }

  OnGetAllProduct() {
   this.store.dispatch(new GetAllProductsAction({}))
  }

  OnGetSelectedProduct() {
    this.store.dispatch(new GetSelectedProductsAction({}))
  }

  onSearch(dataForm: any) {
    this.store.dispatch(new SearchProductsAction(dataForm.keyword));
  }

  OnNewProduct() {
   this.router.navigateByUrl("/newProduct");
  }
}
