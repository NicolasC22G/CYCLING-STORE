import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-basic',
  templateUrl: './home-basic.component.html',
  styleUrls: ['./home-basic.component.css']
})
export class HomeBasicComponent implements OnInit {

  mailRegexpValidation = new RegExp(/^[a-z0-9_-]+(\.[a-z0-9_-]{2,})*@([a-z0-9_-]+\.){1,3}[a-z0-9_-]{2,}$/);

  constructor() { }

  ngOnInit() {
  }

}
