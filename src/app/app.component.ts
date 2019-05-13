import { Component } from '@angular/core';
declare function require(name:string);
const data: any = require('./data.json');
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  tournament = data;

  ngOnInit() {
    console.log(this.tournament);
  }
}
