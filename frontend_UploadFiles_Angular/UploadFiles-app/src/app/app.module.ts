import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UploadFilesComponent } from './componets/upload-files/upload-files.component';
import { UploadFilesService } from './services/upload-files.service';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UploadFilesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UploadFilesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
