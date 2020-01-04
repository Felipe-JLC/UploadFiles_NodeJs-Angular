import { Component, OnInit } from '@angular/core';
import { UploadFilesService} from '../../services/upload-files.service'

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent implements OnInit {

  uploadedFiles:Array <File>;//se declara una vriable array de tipo file
  constructor(private uploadService:UploadFilesService) { }

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
      

        this.uploadService.uploadFile(fordata).subscribe((res)=>{
          console.log('Response:',res);
          alert("archivo subido");
        }, (error) => {
          console.error(error);
          console.log("error:" +JSON.stringify(error));
          alert("Ocurrio un error en la conecxion del servicio , vuelva intentar mas tarte por favor");
          
        });
        
      
    }
  }
    
  }

  onFileChange(e){
    console.log("FileChange", e.target.files);
    this.uploadedFiles= e.target.files;
    
  }


}
