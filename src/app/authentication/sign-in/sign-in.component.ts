import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, FormBuilder, Validators}from '@angular/forms'
import { AuthServiceService } from '../../services/auth-service.service';
import { ErrorService } from '../../services/error.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
error;
errMsgs=this.errorServce.errorMsg;
  constructor(private fb:FormBuilder,private authSrvice:AuthServiceService,private errorServce:ErrorService) { 
    this.contactForm=fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
  }
contactForm=new FormGroup({
  email:new FormControl(''),
  password:new FormControl('')
})
  ngOnInit(): void {
  }
formSubmit(val){
  let email=val.email;
  let password=val.password
  
  this.authSrvice.signIn(email,password).subscribe(data=>{
    console.log(data)
  },err=>{
    console.log(err)
   this.error=this.errMsgs[err];
   
  })
}
}
