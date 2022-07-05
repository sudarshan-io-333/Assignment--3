import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // title = 'Assignment3';
  // count:number=1;
  action: string;

  ngOnInit() {
  }

  // submitData(item: any){
    // item.patchValue({
    //   box1Volume: ((item.get('Test1').value + item.get('Test2').value) /2).toFixed(3)
    // });
  //  }

  // changeVal(event: Event,id:any) {
  //   let test1b: any = document.getElementById("test1b") as HTMLInputElement | null;;
  //   let test2b: any = document.getElementById("test2b") as HTMLInputElement | null;;
  //   let test3b: any = document.getElementById("test3b") as HTMLInputElement | null;;
  //   let test4b: any = document.getElementById("test4b") as HTMLInputElement | null;;
  //   console.log("test1b", test1b.value)
  //   console.log("test2b", test2b.value)
  //   console.log("test3b", test3b.value)
  //   console.log("test4b", test4b.value)
    // let test1b = document.getElementById("test1b");
    // let test1b = document.getElementById("test1b");
    
    // if (InputEvent) {
    //   this.count += 1;
    //   console.log("if count", this.count)
    // }
    // else if(event == 0) {
    //   this.count = 1;
    //   console.log("else count", this.count)
    // }
//     if ((test1b != null || test2b != null || test3b != null || test4b != null) &&
//       (test1b.value >= 1 || test2b.value >= 1 || test3b.value >= 1 || test4b.value >= 1)){
//       console.log("Reset count", this.count)
//       if (this.count < 4 ) {
//         this.count += 1;
//       }
//     }
//     else {
//       this.count = 1;
//     }
//   }
  
  title = 'Angular_TemplateForm';
  second!: number;
  avg1!: number;
  avg2!: number;

  test1!: string;
  test2!: string;
  test3!: string;
  test4!: string;

  test1A!: string;
  test1B!: string;
  test1C!: string;
  test1D!: string;
  positive!: number;
  // test :{'test#1','text#2','test#3','test#4'}

  before: any = {};
  after: any = {};

  com_avg !: number;

  signform: FormGroup;
  beforechange(event: any, action: string | number) {
    this.before[action] = +event;
    // console.log(this.before);

    let txt = 0;
    for (let x in this.before) {
      if (this.before[x] === 0 || "") {
        delete this.before[x];
      }
    }
    console.log(txt);
    for (let x in this.before) {
      var size = Object.keys(this.before).length;
      txt += this.before[x];
      this.avg1 = txt / size;
      this.final_avg();
    }
  }

  afterchange(event: any, action: string | number) {
    this.after[action] = +event;
    // console.log(this.before);
    let txt = 0;
    for (let x in this.after) {
      if (this.after[x] === 0 || "") {
        delete this.after[x];
      }
    }
    // console.log(txt);
   
    for (let x in this.after) {
      var size = Object.keys(this.after).length;
      txt += this.after[x];
      this.avg2 = txt / size;
      this.final_avg();
    }
  }

  final_avg() {
    this.positive = (this.avg1 - this.avg2) / this.avg2;
    this.com_avg = Math.abs(this.positive);
  }
  info(items:any) {
    console.log(items);

  }
 }
