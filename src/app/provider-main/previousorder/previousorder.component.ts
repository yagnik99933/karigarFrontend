import { Component, OnInit } from '@angular/core';
import { ProviderstatusService } from 'src/app/services/providerstatus.service';
export interface PeriodicElement {
  position: number;
  serviceType: string;
  address: string;
  date: string;
  timeslot: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, serviceType: 'Plumber', address: '7A karoli Nagar', date: '08/07/20', timeslot:'10:00am - 01:00pm'},
  {position: 2, serviceType: 'Carpenter', address: '420 Laksmi Narayan ,Bhavrakau', date: '08/07/20', timeslot:'10:00am - 01:00pm'},
  {position: 3, serviceType: 'Plumber', address: '7A karoli Nagar', date: '08/07/20', timeslot:'10:00am - 01:00pm'},
  {position: 4, serviceType: 'Carpenter', address: '420 Laksmi Narayan ,Bhavrakau', date: '08/07/20', timeslot:'10:00am - 01:00pm'},
  {position: 5, serviceType: 'Plumber', address: '7A karoli Nagar', date: '08/07/20', timeslot:'10:00am - 01:00pm'},
  {position: 6, serviceType: 'Carpenter', address: '420 Laksmi Narayan ,Bhavrakau', date: '08/07/20', timeslot:'10:00am - 01:00pm'},
  {position: 7, serviceType: 'Plumber', address: '7A karoli Nagar', date: '08/07/20', timeslot:'10:00am - 01:00pm'},
  {position: 8, serviceType: 'Carpenter', address: '420 Laksmi Narayan ,Bhavrakau', date: '08/07/20', timeslot:'10:00am - 01:00pm'},
  {position: 9, serviceType: 'Plumber', address: '7A karoli Nagar', date: '08/07/20', timeslot:'10:00am - 01:00pm'},
  {position: 10, serviceType: 'Carpenter', address: '420 Laksmi Narayan ,Bhavrakau', date: '08/07/20', timeslot:'10:00am - 01:00pm'},

];


@Component({
  selector: 'app-previousorder',
  templateUrl: './previousorder.component.html',
  styleUrls: ['./previousorder.component.scss']
})
export class PreviousorderComponent implements OnInit {

  displayedColumns: string[] = ['position', 'serviceType', 'address', 'date','timeslot'];
  dataSource = ELEMENT_DATA;
  orderDetails: any;
  orderCount: number;
  constructor(private providerstatusService: ProviderstatusService) { }

  ngOnInit(){
    this.providerstatusService.showPreviousOrder()
    .subscribe((orderDetails) =>{
      this.orderDetails = orderDetails;
      this.orderCount = this.orderDetails.length;
      console.log(this.orderDetails);
    })
  }

}
