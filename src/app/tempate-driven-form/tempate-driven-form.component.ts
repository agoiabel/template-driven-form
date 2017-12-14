import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tempate-driven-form',
  templateUrl: './tempate-driven-form.component.html',
  styleUrls: ['./tempate-driven-form.component.css']
})
export class TempateDrivenFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  myOptions = [
    {id: 1, name: "abel"},
    {id: 2, name: "agoi"},
    {id: 3, name: "adeyemi"},
  ];

  /**
   * access the data sent from the template
   * 
   * @param {string} firstname 
   */
  accessName(firstname) {
  	console.dir(firstname);
  }

  submit(form) {
  	console.dir(form);
  }
}
