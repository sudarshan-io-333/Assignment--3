import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-ass',
  templateUrl: './reactive-ass.component.html',
  styleUrls: ['./reactive-ass.component.css']
})
export class ReactiveAssComponent implements OnInit {

  activatorMasterForm: FormGroup;
  formBuilder: any;
  newItem= [];

  constructor(private fb: FormBuilder) {

    this.activatorMasterForm = fb.group({
      dateCtrl: ['', Validators.required],
      typeCtrl: ['', Validators.required],
      numberCtrl: ['', Validators.required],
      tPWDCtrl: [],
      items: this.fb.array([
        this.fb.group({
        itemNumber: [''],
        partsByWeight: ['']
        })
      ])
    });
  }




  ngOnInit() {
    // this.createForm();
  }



  get items() {
    return this.activatorMasterForm.get('items') as FormArray;
  }


  postData() {

  }

  addNewItem() {
    // const itemLength = this.items.length;
    const newItem = this.fb.group({
      // itemsId:[itemLength + 1],
      itemNumber: [''],
      partsByWeight: ['']
    });
    this.items.push(newItem);
  }

}
