import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { Cart } from "./cart.model";
// featured module - this is added to the root module 
@NgModule({
    providers: [ProductRepository, StaticDataSource, Cart]
})
export class ModelModule { }
