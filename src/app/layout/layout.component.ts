import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  @Input() inputSideNav: MatSidenav;
// vedi https://stackoverflow.com/questions/48073057/open-close-sidenav-from-another-component
  constructor() { }

  ngOnInit() {
  }

}
