import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
  private htpp: HttpClient ) { }

  entrar(userLogin: UserLogin): Observable<UserLogin>{
return this.htpp.post<UserLogin>('http://localhost:8080/usuarios/logar', userLogin)
  }

  cadastrar(user:User): Observable<User>{
return this.htpp.post<User>('http://localhost:8080/usuarios/cadastrar', user)
  }

  logado(){
    let ok: boolean = false
    
    if(environment.token != ''){
      ok = true
    }

    return ok

  }

}
