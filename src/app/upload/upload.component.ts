import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  name = new FormControl('');

  selectedFile:File|null = null;
  url:string|ArrayBuffer|null = '';

  wynikObservable:Observable<Object>|null = null;
  wynik:any;

  ngOnInit(): void {
  }

  constructor(private http: HttpClient){

  }
  
  onFileSelected(event:any){
    this.selectedFile = <File>event.target.files[0];
  }
  
  onUpload(){
    const fd =new FormData();
    var reader = new FileReader();
    
    if(this.selectedFile!=null){

      fd.append('image',this.selectedFile, this.selectedFile.name);
      reader.readAsDataURL(this.selectedFile);

      reader.onload = (event) => { 
        if(event.target)
          this.url = event.target.result;
      }

      this.wynikObservable=this.uploadImage(this.selectedFile);
      this.wynikObservable.subscribe((data:any) => {
        this.wynik=data.result;
        console.log(this.wynik)
      });
    }
  }
  public findAnime(){}
  public uploadImage(image: File): Observable<Object> {
    const formData = new FormData();

    formData.append('image', image);

    return this.http.post('https://api.trace.moe/search?anilistInfo', formData);
  }
}