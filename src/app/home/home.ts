import {Component} from 'angular2/core';

@Component({
  selector: 'my-home',
  styles: [require('./home.css')],
  template: require('./home.html')
})
export class Home {
  constructor(){
    console.log("in home constructor");
  }
}
