import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GuestsComponent } from './guests/guests.component';
import { HistoryComponent } from './history/history.component';
import { NewResidentComponent } from './new-resident/new-resident.component';
import { EditResidentComponent } from './edit-resident/edit-resident.component';
import { AddguestComponent } from './addguest/addguest.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard'; // Import the AuthGuard service

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }, // Protected route
  { path: 'guests', component: GuestsComponent, canActivate: [AuthGuard] }, // Protected route
  { path: 'history', component: HistoryComponent, canActivate: [AuthGuard] }, // Protected route
  { path: 'addresident', component: NewResidentComponent, canActivate: [AuthGuard] }, // Protected route
  { path: 'editresident/:id', component: EditResidentComponent, canActivate: [AuthGuard] }, // Protected route
  { path: 'addguest', component: AddguestComponent, canActivate: [AuthGuard] }, // Protected route
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
