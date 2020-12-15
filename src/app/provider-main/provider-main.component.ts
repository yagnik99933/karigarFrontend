import { Component, OnInit } from '@angular/core';
import { InstantSolutionComponent } from './instant-solution/instant-solution.component';
import { MatDialog } from '@angular/material/dialog';
import { StatusComponent } from './status/status.component';
import { FeedbackComponent } from '../user-main/feedback/feedback.component';

import { Router } from '@angular/router';

@Component({
  selector: 'app-provider-main',
  templateUrl: './provider-main.component.html',
  styleUrls: ['./provider-main.component.scss']
})
export class ProviderMainComponent implements OnInit {
  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit( ){

  }

  openInstantSolution(){
    const instantRef = this.dialog.open(InstantSolutionComponent,
      {width: '750px', height: '380px'});

    // instantRef.afterClosed()
    //   .subscribe((result) => {
    //     console.log(result);
    //   });
  }

  // openStatus(){
  //   const statusRef = this.dialog.open(StatusComponent,
  //     {width: '550px', height: '500px'});

  //   statusRef.afterClosed()
  //     .subscribe((result) => {
  //       console.log(result);
  //     });
  // }
  openFeedbackForm() {
    const feedback = this.dialog.open(FeedbackComponent,
      {width: '540px', height: '600px'});
      this.router.navigate([])
    // feedback.afterClosed()
    //   .subscribe(result => {
    //     console.log(result);
    //   });
    }


}
