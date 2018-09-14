import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary'

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  diaries = [
    new Diary(1, 'The day I went fishing', 'I caught a huge Fish and we had it for Dinner that day ',new Date(2018,3.5)),
    new Diary(2, 'The day I went fishing', 'I caught a huge Fish and we had it for Dinner that day ',new Date(2018,4,6)),
    new Diary(3, 'The day I went fishing', 'I caught a huge Fish and we had it for Dinner that day ',new Date(2018,5,3)),
  ]

  toogleDetails(index) {
    this.diaries[index].showDescription = !this.diaries[index].showDescription;
  }

  completeDiary(isComplete,index){
    if (isComplete){
      this.diaries.splice(index, 1)
    }
  }

  addNewDiary(diary) {
    let diaryLength = this.diaries.length;
    diary.id=diaryLength+1;
    diary.completeDate = new Date(diary.completeDate)
    this.diaries.push(diary)
    }

    constructor() { }

    ngOnInit() {
    }

  }
