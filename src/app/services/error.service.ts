import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
handleError(err:HttpErrorResponse){
  if(!err.error || !err.error.error){
    return throwError(this.errorMsg["UNKNOWN"])
    
  }
  else{
    return throwError(err.error.error.message)
  }
}
  constructor() { }
  errorMsg={
    UNKNOWN:'An Unknown Error is Occured',
    EMAIL_EXISTS:'This Email is already Exists.Please try with another email.',
    OPERATION_NOT_ALLOWED:'Password sign-in is disabled for this project',
    TOO_MANY_ATTEMPTS_TRY_LATER:'we have blocked all requests from this device',
    EMAIL_NOT_FOUND:'There is no user record corresponding to this identify',
    INVALID_PASSWORD:'The password is invalid or the user does not exists',
    USER_DISABLED:'The user account has been disabled by an adminstrator'
  }
}
