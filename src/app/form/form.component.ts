import { Component, OnInit } from '@angular/core';
import { Store} from '@ngrx/store';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  toggleFormVariable = false;
  formNewWord = new FormGroup({
    english: new FormControl(''),
    vietnam: new FormControl('')
  });

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }
  submit() {
    const { english, vietnam} = this.formNewWord.value;
    const newWord = { _id: Date.now(), en: english, vn: vietnam, isMemorized: false};
    this.store.dispatch({type: 'ADD_WORD', newWord});
    this.formNewWord.reset();
    this.toggleForm();
  }
  toggleForm() {
    this.toggleFormVariable = !this.toggleFormVariable;
  }
}
