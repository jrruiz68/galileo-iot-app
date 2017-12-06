import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemCardiacDetails } from '../item-cardiac-details/item-cardiac-details';

@Component({
  selector: 'page-list',
  templateUrl: 'cardiac-list.html'
})
export class CardiacSoundsList {
  icons: string[];
  items: Array<{title: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    /**this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for(let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }*/

    this.items = [];

    this.items.push({
      title: 'Aneurisma del seno de Valsalva',
      icon: 'pulse',
    });

    this.items.push({
      title: 'Defecto atrial septal ',
      icon: 'pulse'
    });

    this.items.push({
      title: 'Conducto arterioso persistente',
      icon: 'pulse'
    });

    this.items.push({
      title: 'Estenosis pulmonar leve',
      icon: 'pulse'
    });

    this.items.push({
      title: 'Estenosis subaórtica',
      icon: 'pulse'
    });

    this.items.push({
      title: 'Insuficiencia aórtica',
      icon: 'pulse'
    });

    this.items.push({
      title: 'Insuficiencia cardíaca congestiva',
      icon: 'pulse'
    });

    this.items.push({
      title: 'Miocardiopatía hipertófica',
      icon: 'pulse'
    });

    this.items.push({
      title: 'Miocardiopatía Takotsubo',
      icon: 'pulse'
    });

    this.items.push({
      title: 'Estenosis subaórtica',
      icon: 'pulse'
    });

    this.items.push({
      title: 'Regurgitación mitral',
      icon: 'pulse'
    });

    this.items.push({
      title: 'Pulso cardíaco normal',
      icon: 'pulse'
    });

    this.items.push({
      title: 'Pericarditis',
      icon: 'pulse'
    });

    this.items.push({
      title: 'Presión sanguínea',
      icon: 'pulse'
    });

    this.items.push({
      title: 'Sonido aórtico normal',
      icon: 'pulse'
    });

    this.items.push({
      title: 'Pulso cardíaco normal',
      icon: 'pulse'
    });

    this.items.push({
      title: 'Regurgitación aórtica',
      icon: 'pulse'
    });

    this.items.push({
      title: 'Pulso cardíaco normal',
      icon: 'pulse'
    });

    this.items.push({
      title: 'S3',
      icon: 'pulse'
    });

    this.items.push({
      title: 'S4',
      icon: 'pulse'
    });

    this.items.push({
      title: 'Defecto septal ventricular',
      icon: 'pulse'
    });

    this.items.push({
      title: 'Soplo estenosis aórtica',
      icon: 'pulse'
    });

    this.items.push({
      title: 'Soplo estenosis mitral',
      icon: 'pulse'
    });

    this.items.push({
      title: 'Soplo holosistólico',
      icon: 'pulse'
    });

    this.items.push({
      title: 'Soplo insuficiencia mitral',
      icon: 'pulse'
    });

    this.items.push({
      title: 'Válcula aórtica bicúspide',
      icon: 'pulse'
    });

  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemCardiacDetails, {
      item: item
    });
  }
}
