import { Component, OnInit } from '@angular/core';
import { UploadFilesService} from '../../services/upload-files.service';
import Swal from'sweetalert2';

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
    console.log(this.uploadedFiles);
  //  alert("Upload");
    let fordata=new FormData();//se utiliza para construir un objeto
    //console.log(this.uploadedFiles.length);
    console.log(this.uploadedFiles);
    
    
    if(this.uploadedFiles==null || this.uploadedFiles.length==0 ){
      Swal.fire(
        'No selecciono ningunarchivo',
        'por favor selecciones un archivo',
        'question'
      );
   
     
  }else {
    for (let index = 0; index < this.uploadedFiles.length; index++) {
      fordata.append("uploads[]",this.uploadedFiles[index], this.uploadedFiles[index].name); //nombre de campo, valor(blob,file,cadena), nombre del archivo
      

        this.uploadService.uploadFile(fordata).subscribe((res)=>{
          console.log('Response:',res);
         // alert("archivo subido");
         var json=JSON.stringify(res);//se convierte el json string 
         var objeto = JSON.parse(json); // el json que esta ne string se convierte en objeto     
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: objeto.message,
            showConfirmButton: false,
            timer: 1500
          });
        }, (error) => {
          console.error(error);
          console.log("error:" +JSON.stringify(error));
        //  alert("Ocurrio un error en la conecxion del servicio , vuelva intentar mas tarte por favor");

          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'lo siento currio un error rn la connecion del servicio, vuelva aintentar mas tarde por favor',
       
          });
          
        });
        
      
    }
  }
    
  }

  onFileChange(e){
    console.log("FileChange", e.target.files);
    this.uploadedFiles= e.target.files;
    
  }


}
