import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HTTPService} from "../../app/http.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private httpService: HTTPService) {

  }

  cabeza() {
  console.log('cabeza...');
    this.httpService.setAction('cabeza');
    this.httpService.HTTP({}).subscribe(data => {
      console.log('Response>>>', data.data)
    }, (err) => {
    })
  }

  corazon() {
    console.log('corazon...');
    this.httpService.setAction('corazon');
    this.httpService.HTTP({}).subscribe(data => {
      console.log('Response>>>', data.data)
    }, (err) => {
    })
  }
}
