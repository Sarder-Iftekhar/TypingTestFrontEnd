import { Component } from '@angular/core';
import { Navigation } from '../models/model';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

  navigationList : Navigation[];

  constructor(){
    this.navigationList = [
        {
        name : 'simple test',
        path : 'simple',
      },
      {
        name: 'advanced test',
        path: 'advanced',
      },
      {
        name: 'statistics',
        path: 'statistics',
      },
      {
        name: 'about us',
        path: 'aboutus',
      },
    ]
 

  }
  
  ngOnInit(): void {}


}
