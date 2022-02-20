import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Product} from "../model/product.model";

@Injectable({providedIn:"root"})

export class ProductService{
  constructor(private http:HttpClient) {
  }
  public getProducts():Observable<Product[]>{
    let host=Math.random()>0.2?environment.host:environment.unreachableHost;
    //let host=environment.host;
    return this.http.get<Product[]>(host+"/products");
  }
  getSelectedProducts():Observable<Product[]>{
    let host=environment.host;
    return this.http.get<Product[]>(host+"/products?selected=true");
  }
  getAvailbleProducts():Observable<Product[]>{
    let host=environment.host;
    return this.http.get<Product[]>(host+"/products?availble=true");
  }
  searchProducts(keyword:string):Observable<Product[]>{
    let host=environment.host;
    return this.http.get<Product[]>(host+"/products?name_like="+keyword);
  }
  select(product:Product):Observable<Product>{
    let host=environment.host;
    product.selected=!product.selected;
    return this.http.put<Product>(host+"/products/"+product.id,product);
  }
  deleteProduct(product:Product):Observable<void>{
    let host=environment.host;
    product.selected=!product.selected;
    return this.http.delete<void>(host+"/products/"+product.id);
  }
  public delete(id:number):Observable<void>{
    return this.http.delete<void>(environment.host+"/products/"+id);
  }
  save(product:Product):Observable<Product>{
    let host=environment.host;
    return this.http.post<Product>(host+"/products",product);
  }
  /*getProduct(id:number):Observable<Product>{
    let host=environment.host;
    return this.http.get<Product>(host+"/products/"+id);
  }*/
  updateProducts(product:Product):Observable<Product>{
    let host=environment.host;
    return this.http.put<Product>(host+"/products/"+product.id,product);
  }
  public update(product:Product):Observable<Product>{
    return this.http.put<Product>(environment.host+"/products/"+product.id,product);
  }
  public setSelected(product:Product):Observable<Product>{
    return this.http.put<Product>(environment.host+"/products/"+product.id,{...product,selected:!product.selected});
  }
  public getProductById(id:number):Observable<Product>{
    return this.http.get<Product>(environment.host+"/products/"+id);
  }


}
