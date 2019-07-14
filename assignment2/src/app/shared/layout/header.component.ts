import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  @Output() toggleSideMenu = new EventEmitter();

  ngOnInit() {}

  clickMenuButton() {
    this.toggleSideMenu.emit();
  }
}
@Component({
  selector: 'app-sidemenu',
})
export class SidemenuComponent implements OnInit {
  @ViewChild('menuRef', { static: true }) menuRef: ElementRef;
  constructor() {}

  ngOnInit() {}

  toggle() {
    this.menuRef.nativeElement.classList.toggle('hide');
  }
}
