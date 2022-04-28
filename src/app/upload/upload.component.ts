import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  name = new FormControl('');
  selectedFile:File|null = null;
  url:string|ArrayBuffer|null = '';

  ngOnInit(): void {
  }

  constructor(){

  }
  
  onFileSelected(event:any){
    this.selectedFile = <File>event.target.files[0];
  }
  
  onUpload(){
    const fd =new FormData();
    var reader = new FileReader();

    if(this.selectedFile==null) 
      return;

    else 
    {
      fd.append('image',this.selectedFile, this.selectedFile.name);
      reader.readAsDataURL(this.selectedFile);
      reader.onload = (event) => { 
        if(event.target)
          this.url = event.target.result;
      }
    }
  }
}