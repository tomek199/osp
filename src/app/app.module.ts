import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LIGHTBOX_CONFIG, LightboxModule} from '@ngx-gallery/lightbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FbWidgetComponent } from './fb-widget/fb-widget.component';
import { HomeComponent } from './home/home.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { HistoryComponent } from './history/history.component';
import { GalleryComponent } from './gallery/gallery.component';
import { StaffComponent } from './staff/staff.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { GalleryModule } from "@ngx-gallery/core";

@NgModule({
  declarations: [
    AppComponent,
    FbWidgetComponent,
    HomeComponent,
    EquipmentComponent,
    HistoryComponent,
    GalleryComponent,
    StaffComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GalleryModule.withConfig({
      loadingStrategy: 'lazy',
      loadingMode: 'indeterminate',
      loop: true
    }),
    LightboxModule.withConfig({
      panelClass: 'fullscreen'
    })
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
