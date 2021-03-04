import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { identity, Subject } from 'rxjs';
import { User } from '../appModel/user.model';
import { AuthResponse } from '../interface/auth-response';
import {catchError,tap}from 'rxjs/operators'
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
APIKEY="AIzaSyC_SU3EAPNi8KbnCo3ME1BWZh2tFM9zwY4"
user =new Subject<User>()
  constructor(private http:HttpClient,private _errservice:ErrorService) { }
  signUp(email:any,password:any){
    return this.http.post< AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.APIKEY}`,{
      email:email,
      password:password,
      returnSecureToken:true
    }).pipe(
      catchError(err=>{
       return this,this._errservice.handleError(err)
      }),
      tap(res=>{
      this.authenticatedUser(res.email,res.localId,res.idToken,+res.expiresIn)
    }
)
    )
  }
  signIn(email:any,password:any){
    return this.http.post<AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.APIKEY}`,{
      email:email,
      password:password,
      returnSecureToken:true
    }).pipe(
      catchError(err=>{
       return this,this._errservice.handleError(err)
      }),
      tap(res=>{
      this.authenticatedUser(res.email,res.localId,res.idToken,+res.expiresIn)
    }
)
    )
  }

  private authenticatedUser(email,userId,token,expiresIn){
    const expiarionDate=new Date(new Date().getTime()+expiresIn*1000)
    const  user=new User(email,userId,token,expiarionDate)
    console.log('user=>',user)
    this.user.next(user)
  }
}
