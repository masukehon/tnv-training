import { Component, OnInit, Input } from '@angular/core';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  @Input() wordInput;
  @Input() filterInput: boolean;
  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  Remove(_id) {
    this.store.dispatch({type: 'REMOVE_WORD', _id});
  }

  toggleMemorized(_id) {
    this.store.dispatch({type: 'UPDATE_MEMORIZED', _id});
  }


}
