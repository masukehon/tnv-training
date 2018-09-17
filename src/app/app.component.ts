import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-angular';
  listWords: Array<any>;
  filterStatus: String;
  constructor(private store: Store<any>) {
    this.store.select('listWords').subscribe(listW => this.listWords = listW);
    this.store.select('filterStatus').subscribe(f => this.filterStatus = f);
  }

  ngOnInit() {
  }

  filterWord(isMemorized: boolean) {
    const showAll = this.filterStatus === 'SHOW_ALL';
    const showMemorized = this.filterStatus === 'SHOW_MEMORIZED' && isMemorized;
    const showNotMemorized = this.filterStatus === 'SHOW_NOT_MEMORIZE' && !isMemorized;
    return showAll || showMemorized || showNotMemorized;
  }

}
