import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  logedin:any
  constructor() { }

  ngOnInit(): void 
  {
    this.logedin=sessionStorage.getItem("email");
  }

}
