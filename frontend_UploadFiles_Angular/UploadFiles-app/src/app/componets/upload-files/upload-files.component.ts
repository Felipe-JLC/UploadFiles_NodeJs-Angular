import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent implements OnInit {

  uploadedFiles:Array <File>;//se declara una vriable array de tipo file
  constructor() { }

  ngOnInit() {
  }

  onUpload(){
    console.log("Upload");
  //  alert("Upload");
    let fordata=new FormData();//se utiliza para construir un objeto
    if(this.uploadedFiles==null){
    alert("no ha seleccionado ningun archivo");
     
  }else {
    for (let index = 0; index < this.uploadedFiles.length; index++) {
      fordata.append("uploads[]",this.uploadedFiles[index], this.uploadedFiles[index].name); //nombre de campo, valor(blob,file,cadena), nombre del archivo
      alert("archivo subido");
    }
  }
    
  }

  onFileChange(e){
    console.log("FileChange", e.target.files);
    this.uploadedFiles= e.target.files;
    
  }


}
