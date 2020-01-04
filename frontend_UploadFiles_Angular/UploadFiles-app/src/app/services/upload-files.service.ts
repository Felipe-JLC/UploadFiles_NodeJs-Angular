import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadFilesService {

  constructor(private http: HttpClient) { }

  uploadFile(formData){

    let urlApi='http://localhost:3000/api/subirFiles';
    let post=this.http.post(urlApi, formData);
    
    return post;
  }
}
