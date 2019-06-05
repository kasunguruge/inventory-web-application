import { Component, OnInit } from '@angular/core';
import {CriticalItemService} from '../../service/critical-item.service';
@Component({
  selector: 'app-critical-item',
  templateUrl: './critical-item.component.html',
  styleUrls: ['./critical-item.component.css']
})
export class CriticalItemComponent implements OnInit {

 
  items: Object[];
 
  constructor(private data:CriticalItemService) { }

  ngOnInit() {
    this.data.getItems().subscribe(data => {
      this.items = data as Object[]
      
      console.log(this.items);
    }
  );
  }

 
}
