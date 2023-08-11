// import { Component, OnInit } from '@angular/core';
// import { DataService } from '../data.service';

// @Component({
//   selector: 'app-data',
//   templateUrl: './data.component.html',
//   styleUrls: ['./data.component.css']
// })
// export class DataComponent implements OnInit{

//   datas:any;

//   constructor (private service:DataService){}
//   ngOnInit(){
//     this.datas=this.service.getDatas().subscribe(d=>this.datas=d);
//   }

// }
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
// import { FormComponent } from '../form/form.component';
// import {EditComponent} from "../edit/edit.component";

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditComponent } from '../edit/edit.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent implements OnInit {
  datas: any;
  // newData: any = {
  //   name: '',
  //   email: '',
  //   number: ''
  // };

  constructor(private service: DataService, private obj: NgbModal,private http: HttpClient) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.service.getDatas().subscribe((d) => (this.datas = d));
  }

  // onSubmit() {
  //   this.service.addNewData(this.newData).subscribe(
  //     res => {
  //       console.log('Data added successfully:', res);
  //       this.fetchData(); // Refresh the data after adding
  //       this.newData = {}; // Clear the form
  //     },
  //     (error) => {
  //       console.error('Error adding data:', error);
  //     }
  //   );
  // }
  // constructor(private obj:NgbModal){}
  openEdit() {
    const modalRef = this.obj.open(EditComponent, { centered: true });
  }

  onDelete(id:string) {
    const modalRef = this.http.delete(`http://localhost:8080/delete/${id}.json`).subscribe();    
  }
}
