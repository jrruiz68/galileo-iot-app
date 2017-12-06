import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HTTPService} from "../../app/http.service";
//import { Http, Headers } from '@angular/http';

@Component({
  selector: 'page-item-details',
  templateUrl: 'item-cardiac-details.html'
})
export class ItemCardiacDetails {
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpService: HTTPService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

  }

  /**reproducir(){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let body = this.selectedItem.id;

    this.http.post('http://192.168.1.71:8102/reproducir', JSON.stringify(body),
      { headers: headers }).subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);// Error getting the data
      });
  }*/

  reproducir(){
    console.log('Reproduciendo...');
    this.httpService.setAction('reproducir');
    this.httpService.HTTP({}).subscribe(data => {
      console.log('Play', data.data)
    }, (err)=> {
    })
  }

  detener(){
    console.log('Deteniendo...');
    this.httpService.setAction('detener');
    this.httpService.HTTP({}).subscribe(data => {
      console.log('Stop', data.data)
    }, (err)=> {
    })
  }

  pausar(){
    console.log('Pausando...');
    this.httpService.setAction('pausar');
    this.httpService.HTTP({}).subscribe(data => {
      console.log('Pause', data.data)
    }, (err)=> {
    })
  }

  repetir(){
    console.log('Repitiendo...');
    this.httpService.setAction('repetir');
    this.httpService.HTTP({}).subscribe(data => {
      console.log('Loop', data.data)
    }, (err)=> {
    })
  }
}
