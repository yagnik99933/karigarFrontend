import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FeedbackComponent } from './feedback/feedback.component';
// import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.scss']
})

export class UserMainComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router,
    private dialog: MatDialog) { }

  ngOnInit()
  {}

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
