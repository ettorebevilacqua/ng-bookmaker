import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class LayoutHeaderComponent implements OnInit {
  title = 'Bookmark';
  constructor() { }

  ngOnInit() {
  }

}
