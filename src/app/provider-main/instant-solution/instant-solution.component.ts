import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-instant-solution',
  templateUrl: './instant-solution.component.html',
  styleUrls: ['./instant-solution.component.scss']
})
export class InstantSolutionComponent implements OnInit {

  mess={ message:''}
  constructor(public dialogRef: MatDialogRef<InstantSolutionComponent>) { }

  ngOnInit(){
  }

  onSubmit(){
    console.log("Message is "+ this.mess.message);
    this.dialogRef.close();
  }
}
