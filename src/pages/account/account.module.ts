import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountPage, PopOverAccount } from './account';

@NgModule({
  declarations: [
    AccountPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountPage),
  ],
  exports: [
    AccountPage,
    PopOverAccount,
  ]
})
export class AccountPageModule {}
