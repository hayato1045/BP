import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TestPage } from "../test/test.page";
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private router: Router, private navCtrl: NavController) {}
  
  gotoTestByRouter() {
    this.router.navigateByUrl('/test');

}
}