import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() sideNavToggled = new EventEmitter<boolean>();
  sideNavStatus: boolean = true;

  /**
   *
   */
  constructor() {

  }
  ngOnInit() : void
  {

  }

  menuButtonClicked() {
    this.sideNavStatus = !this.sideNavStatus;
    this.sideNavToggled.emit(this.sideNavStatus);
  }


}
