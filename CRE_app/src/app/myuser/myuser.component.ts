import { Component } from '@angular/core';
import { MyuserService } from '../myuser.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-myuser',
  standalone: true,
  imports: [HttpClientModule,CommonModule,FormsModule],
  templateUrl: './myuser.component.html',
  styleUrl: './myuser.component.css',
  providers:[MyuserService]
})
export class MyuserComponent {

  public xyz : any;

  public edituser : any;

  constructor(private ss : MyuserService){}

  ngOnInit(){
    this.ss.abc().subscribe(data =>{
      this.xyz = data;
    })
  }

  edit(editdata : any){
    this.edituser = {...editdata}
  }

  update_data(){
    this.ss.xyz(this.edituser).subscribe(data =>{
      this.ngOnInit();
      this.edituser = null;
    })
  }


}
