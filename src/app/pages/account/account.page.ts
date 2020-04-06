import { Component } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-account',
  templateUrl: 'account.page.html',
  styleUrls: ['account.page.scss']
})
export class AccountPage
{
  acc: any = { name: 'Phạm Thị Ngọc Hà', avatarSrc: '/assets/img/ava.png'}

  constructor(private modalCtrl: ModalController) {}

  
}
