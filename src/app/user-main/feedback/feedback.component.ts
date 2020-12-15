import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserstatusService } from 'src/app/services/userstatus.service';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  category: string[] = ['Suggestion', 'Bug', 'Compliment'];
  stars: number[] = [1, 2, 3, 4, 5];
  starCount: any;
  feedbackForm: FormGroup;
  constructor( private fb: FormBuilder, private userStatus: UserstatusService) { }

  ngOnInit(){
    this.feedbackForm = this.fb.group({
      category: new FormControl(''),
      comment: new FormControl('')
    });
  }

  onSubmit(){
    // this.feedbackForm = this.feedbackForm.value;
    console.log(this.feedbackForm.value);
    console.log(this.starCount)
    this.userStatus.submitFeedback(
      this.feedbackForm.value.category,
      this.feedbackForm.value.comment,
      this.starCount)
      .subscribe((response) => {
        console.log(response);
      });
  }

  countStar(star) {
    this.starCount = star;
    // console.log('Value of star', star);
}

}
