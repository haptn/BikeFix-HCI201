import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccountPage } from './account.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: AccountPage }])
  ],
  declarations: [AccountPage],
  entryComponents: [ProfileComponent]
})
export class AccountPageModule {}
