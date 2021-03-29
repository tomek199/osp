import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { HistoryComponent } from "./history/history.component";
import { StaffComponent } from "./staff/staff.component";
import { ContactComponent } from "./contact/contact.component";
import { VideosComponent } from "./videos/videos.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // this path must be the last one
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
