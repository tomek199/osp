import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {EquipmentComponent} from "./equipment/equipment.component";
import {HistoryComponent} from "./history/history.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {StaffComponent} from "./staff/staff.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'equipment', component: EquipmentComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'staff', component: StaffComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // this path must be the last one
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
