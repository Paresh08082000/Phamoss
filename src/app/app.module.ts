import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PreviewComponent } from './preview/preview.component';
import { StoreComponent } from './store/store.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    HeaderComponent,
    FooterComponent,
    ContactUSComponent,
    PreviewComponent,
    StoreComponent,
    EditProfileComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
