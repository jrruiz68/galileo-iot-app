import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemPulmonicDetails } from '../item-pulmonic-details/item-pulmonic-details';

@Component({
  selector: 'page-list',
  templateUrl: 'pulmonic-list.html'
})
export class PulmonicSoundsList {
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
      title: 'Bronquiectasia',
      icon: 'pulse'
    });

    this.items.push({
      title: 'Bronquiolitis',
      icon: 'pulse'
    });

    this.items.push({
      title: 'Edema pulmonar',
      icon: 'pulse'
    });

    this.items.push({
      title: 'Enfermedad pulmonar obstructiva crónica',
      icon: 'pulse'
    });

    this.items.push({
      title: 'Frotamiento fricción pleural',
      icon: 'pulse'
    });

    this.items.push({
      title: 'Jadear',
      icon: 'pulse'
    });

    this.items.push({
      title: 'Rhonchi ricarditis urémica',
      icon: 'pulse'
    });

    this.items.push({
      title: 'Rhonchi',
      icon: 'pulse'
    });

    this.items.push({
      title: 'Sibilancias asma',
      icon: 'pulse'
    });

    this.items.push({
      title: 'Aliento normal',
      icon: 'pulse'
    });

    this.items.push({
      title: 'S2',
      icon: 'pulse'
    });

    this.items.push({
      title: 'Regurgitación tricúspide',
      icon: 'pulse'
    });

  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemPulmonicDetails, {
      item: item
    });
  }

}
