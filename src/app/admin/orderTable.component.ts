import { Component } from "@angular/core";
import { OrderRepository } from '../model/order.respository';
import { Order } from "../model/order.model";

@Component({
   templateUrl: "orderTable.component.html"
   })
   export class OrderTableComponent {
        includedShipped: boolean = false;
        
        constructor(private repository: OrderRepository){}

        getOrders():Order[]{
            return this.repository.getOrders()
                       .filter(o=>this.includedShipped || !o.shipped);
        }

        markShipped(order: Order){
            order.shipped = true;
            this.repository.updateOrder(order);
        }

        delete(id:number){
            this.repository.deleteOrder(id);
        }
        
    }