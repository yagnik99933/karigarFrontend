import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule} from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserMainComponent } from './user-main/user-main.component';
import { BookServiceComponent } from './user-main/book-service/book-service.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './home/register-user/register-user.component';
import { RegisterProviderComponent } from './home/register-provider/register-provider.component';
import { ProviderMainComponent } from './provider-main/provider-main.component';
import { ConfirmationComponent } from './user-main/confirmation/confirmation.component';
import { InstantSolutionComponent } from './provider-main/instant-solution/instant-solution.component';
import { StatusComponent } from './provider-main/status/status.component';
import { UserProfileComponent } from './user-main/user-profile/user-profile.component';
import { ProviderProfileComponent } from './provider-main/provider-profile/provider-profile.component';
import { PreviouslybookedserviceComponent } from './user-main/previouslybookedservice/previouslybookedservice.component';
import { PreviousorderComponent } from './provider-main/previousorder/previousorder.component';
import { ShowcurrentstatusComponent } from "./user-main/showcurrentstatus/showcurrentstatus.component";
import { AuthGuard } from './auth.guard';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { NotificationBarModule } from 'ngx-notification-bar'
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { SliderModule } from 'angular-image-slider';
import { NgSelectModule } from '@ng-select/ng-select';
import { CookieService } from 'ngx-cookie-service';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { TokenInterceptorService } from './services/token-interceptor.service';
import { FeedbackComponent } from './user-main/feedback/feedback.component';
import { PaymentComponent } from './user-main/book-service/payment/payment.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { UserComponent } from './admin/user/user.component';
import { AdminMainComponent } from './admin/admin-main/admin-main.component';
import { ProviderComponent } from './admin/provider/provider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    UserMainComponent,
    BookServiceComponent,
    HighlightsComponent,
    LoginComponent,
    RegisterUserComponent,
    RegisterProviderComponent,
    ProviderMainComponent,
    ConfirmationComponent,
    InstantSolutionComponent,
    StatusComponent,
    UserProfileComponent,
    ProviderProfileComponent,
    ShowcurrentstatusComponent,
    PreviouslybookedserviceComponent,
    PreviousorderComponent,
    FeedbackComponent,
    PaymentComponent,
    AdminLoginComponent,
    UserComponent,
    AdminMainComponent,
    ProviderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatSnackBarModule,
    MatTabsModule,
    MatStepperModule,
    MatIconModule,
    MatBadgeModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatRadioModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FlexLayoutModule,
    NgxMatSelectSearchModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgSelectModule,
    NotificationBarModule,
    SliderModule,
    ScrollingModule,
    NgbModule,
    ToastrModule.forRoot(),

  ],
  // entryComponents: [
  //   LoginComponent
  // ],
  providers: [
    MatDatepickerModule,
    CookieService,
    AuthGuard,
    ToastrService ,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
