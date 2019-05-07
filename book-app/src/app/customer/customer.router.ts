import{Routes}from '@angular/router';
import { CustomerRegistrationComponent } from './customer-registration.component';
import { CustomerLoginComponent } from './customer-login.component';


export const customerrouter:Routes=[
    {path:"signup",component:CustomerRegistrationComponent},
    {path:"login",component:CustomerLoginComponent}

]