import { Component, OnInit } from '@angular/core';
import {EmployeeService  } from "../employee.service";


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employess = []
  constructor(private service : EmployeeService) { }

  ngOnInit() {
    this.service.getEmployees()
    .subscribe(response => {
      if(response['status'] === 'Sucess'){
        this.employess = response['data'] as any[]
      } 
      else{
        //console.log('error: ',response['error'])
      }
    })
  }

}
