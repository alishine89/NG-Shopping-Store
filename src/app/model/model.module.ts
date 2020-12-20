import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import { OrderRepository } from "./order.respository";
import { RestDataSource } from "./rest.datasource";
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from "../service/auth.service";
import { ConnectionService } from "../service/connection.service";

@NgModule({
    imports:[HttpClientModule],
    providers: [ProductRepository, Cart, Order,
    OrderRepository
    ]
   })
   export class ModelModule { }
