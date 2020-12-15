import { Component, OnInit } from '@angular/core';
import { RegisterProviderComponent } from 'src/app/home/register-provider/register-provider.component';
import { MatDialog } from '@angular/material/dialog';
import { ProviderService } from 'src/app/admin-services/provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.scss']
})
export class ProviderComponent implements OnInit {

  show: boolean = false;
  provider = { mobileNo: '', city: ''};
  providerDetails: any;
  constructor(private dialog: MatDialog, private router: Router,
    private providerService: ProviderService ) { }

  ngOnInit(){
  }

  async searchProvider(mobileNo){
    await this.router.navigate(['admin/provider/mobileNo']);
    this.providerService.searchProvider(mobileNo)
    .subscribe((providerDetails)=>{
      this.providerDetails = providerDetails;
      console.log(this.providerDetails);
    })
    if(this.providerDetails){
      this.show = true;
    }

  }
}
