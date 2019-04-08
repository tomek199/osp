import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {EquipmentComponent} from "./equipment/equipment.component";
import {HistoryComponent} from "./history/history.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {StaffComponent} from "./staff/staff.component";
import {ContactComponent} from "./contact/contact.component";
import { GalleryDetailComponent } from "./gallery-detail/gallery-detail.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'equipment', component: EquipmentComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'gallery/:id', component: GalleryDetailComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // this path must be the last one
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
