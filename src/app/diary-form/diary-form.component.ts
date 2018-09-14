// for submit function dont forget to import the Output and EventEmitter functions.
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Diary } from '../diary'

@Component({
  selector: 'app-diary-form',
  templateUrl: './diary-form.component.html',
  styleUrls: ['./diary-form.component.css']
})
export class DiaryFormComponent implements OnInit {


  // for functional newDiary submit button __START
  newDiary = new Diary(0, "", "", new Date());
  @Output() addDiary = new EventEmitter<Diary>();

  submitDiary() {
    this.addDiary.emit(this.newDiary)
  }
  // __END
  constructor() { }

  ngOnInit() {
  }

}
