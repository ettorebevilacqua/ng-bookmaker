import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import {Bookmark} from './../../models/bookmark';
import { BookmarkService} from './../../services/bookmaker.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public todoSub: Observable<Bookmark>;
  constructor(private router: Router , private todoService: BookmarkService ) { }

  ngOnInit() {
    this.todoSub = this.todoService.list();
  }
  editRecord(id) {
    this.router.navigate(['/edit', id]);
  }
  deleteRecord(id) {
    this.todoService.remove(id);
  }
  public trackByToodFun(index, item) {
    return item.id;
  }
}
