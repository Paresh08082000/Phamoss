import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { XyzComponent } from './xyz/xyz.component';
import { LoginComponent } from './login/login.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { PreviewComponent } from './preview/preview.component';
import { RegisterComponent } from './register/register.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  { path:'home', component: XyzComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contactus', component: ContactUSComponent },
  { path: 'app-footer', component: FooterComponent },
  { path: 'app-preview', component: PreviewComponent},
  { path: 'app-edit-profile', component: EditProfileComponent},
  { path: 'app-store', component: StoreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
