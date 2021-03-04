import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../../services/auth-service.service';
import { ErrorService } from '../../services/error.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  errMsgs=this.errorServce.errorMsg;
  error
  constructor(private fb:FormBuilder,private authService:AuthServiceService,private errorServce:ErrorService) { 
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
  this.authService.signUp(email,password).subscribe(data=>{
    console.log(data)
  },err=>{
    console.log(err)
   this.error=this.errMsgs[err];
  })
}
}