import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-basic',
  templateUrl: './home-basic.component.html',
  styleUrls: ['./home-basic.component.css']
})
export class HomeBasicComponent implements OnInit {

  mailRegexpValidation = new RegExp(/^([-_0-9a-z]+[\.])*[-_0-9a-z]+@[-_0-9a-z]*([-_0-9a-z][\.]?)+[-_0-9a-z](\.[-_0-9a-z]+)$/);

  constructor() { }

  ngOnInit() {
  }

}
