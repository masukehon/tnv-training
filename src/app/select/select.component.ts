import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  OnChange(event) {
    this.store.dispatch({type: 'MESSAGE', filter: event.target.value });
  }
}
