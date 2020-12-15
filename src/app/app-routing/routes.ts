import { Routes, CanActivate } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { UserMainComponent } from '../user-main/user-main.component';
import { BookServiceComponent } from '../user-main/book-service/book-service.component';
import { HighlightsComponent } from '../highlights/highlights.component';
import { ProviderMainComponent } from '../provider-main/provider-main.component';
import { RegisterUserComponent } from '../home/register-user/register-user.component';
import { RegisterProviderComponent } from '../home/register-provider/register-provider.component';
import { ConfirmationComponent } from '../user-main/confirmation/confirmation.component';
import { UserProfileComponent } from '../user-main/user-profile/user-profile.component';
import { ProviderProfileComponent } from '../provider-main/provider-profile/provider-profile.component';
import { PreviouslybookedserviceComponent } from '../user-main/previouslybookedservice/previouslybookedservice.component';
import { PreviousorderComponent } from '../provider-main/previousorder/previousorder.component';
import { StatusComponent } from '../provider-main/status/status.component';
import { ShowcurrentstatusComponent } from '../user-main/showcurrentstatus/showcurrentstatus.component';
import { AuthGuard } from '../auth.guard';
import { PaymentComponent } from '../user-main/book-service/payment/payment.component';
import { AdminLoginComponent } from '../admin/admin-login/admin-login.component';
import { AdminMainComponent } from '../admin/admin-main/admin-main.component';
import { UserComponent } from '../admin/user/user.component';
import { ProviderComponent } from '../admin/provider/provider.component';
import { FeedbackComponent } from '../user-main/feedback/feedback.component';

export const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full'},

  { path: 'home', component: HomeComponent,
  children: [

    { path: 'registeruser', component: RegisterUserComponent },
    { path: 'registerprovider', component: RegisterProviderComponent }
    ]
  },
  // User Url
  { path: 'user/:userid',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: UserMainComponent },
      { path: 'previous', component: PreviouslybookedserviceComponent },
      { path: 'profile', component: UserProfileComponent },
      { path: 'feedback', component: FeedbackComponent },
      { path: 'status', component: ShowcurrentstatusComponent,
      children:[
        { path: ':id', component: ShowcurrentstatusComponent },
      ] },

      { path: 'confirmation', component: ConfirmationComponent },
      { path: 'bookservice', component: BookServiceComponent ,
      children: [
        { path: 'payment', component: BookServiceComponent }
      ]
    }
    ]
  },
  // Provider Url
  { path: 'provider/:providerid',
    canActivate: [AuthGuard],
    children: [
    { path: '', component: ProviderMainComponent },
    { path: 'profile', component: ProviderProfileComponent },
    { path: 'previous', component: PreviousorderComponent },
    { path: 'status', component: StatusComponent ,
    children:[
      { path: ':id', component: StatusComponent }
    ]}
  ]},
  // Admin Url
  { path: 'admin',
  children: [
    { path: 'login', component: AdminLoginComponent },
    { path: 'main', component: AdminMainComponent },
    { path: 'user', component: UserComponent ,
    children: [
      { path: 'mobileNo', component: UserComponent }
    ]},

    { path: 'provider', component: ProviderComponent ,
    children: [
      { path: 'mobileNo', component: ProviderComponent },
      { path: 'city', component: UserComponent ,
      children: [
        { path: 'serviceType', component: ProviderComponent ,
        children: [
          { path: 'area', component: ProviderComponent }
        ]},
      ]}
    ]}
    ]
  },
  { path: 'highlights', component: HighlightsComponent }
  // {path: "**", component : NotFoundComponent}

];




//  Jese agar url chal rhi hai -> localhost:4200/user/:id/bookservice theek

//  Fir usne service book krdi toh Url ho gae -> localhost:4200/user/:id/bookservice/:id theek

//  Fir agar usko ek aur service book krna hain toh uska kya ??
//  Url toh  localhost:4200/user/:id/bookservice/:id chal rahi hai.
//  Fir kya kre ??
