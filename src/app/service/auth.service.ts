import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { RestDataSource } from "../model/rest.datasource";

@Injectable()
export class AuthService {
    constructor(private datasource: RestDataSource){
    }

    authenticate(username: string, password: string):Observable<boolean>{
        return this.datasource.authenticate(username, password)
        .pipe(map(res => {
          if(res == true){
          localStorage.setItem('token', JSON.stringify(this.datasource.auth_token));
          return true;
          }
          else
          return false;
        }));
    }

    get authenticated():boolean {
        let token:string = JSON.parse(localStorage.getItem('token'));
        if(token != undefined && token != null){
          this.datasource.auth_token = token;
          return true;
        }
        return false;
    }

    clear(){
        this.datasource.auth_token = null;
    }

}
