import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit{
  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder){
    this.form= this.formBuilder.group({
     
    })
  }
  
  ngOnInit() {}
  //metodos
  onEnviar(event: Event){
    event.preventDefault;
  }
}