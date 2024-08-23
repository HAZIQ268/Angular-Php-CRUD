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
  public deluser : any;

  constructor(private service : MyuserService){}

  ngOnInit(){
    this.service.abc().subscribe(data =>{
      this.xyz = data;
    })
  }

  edit(editdata : any){
    this.edituser = {...editdata}
  }

  update_data(){
    this.service.xyz(this.edituser).subscribe(data =>{
      this.ngOnInit();
      this.edituser = null;
    })
  }

  delete() {
    this.service.del(this.deluser).subscribe(data => {
      this.deluser = data;
      console.log(data);
    })
  }




}
