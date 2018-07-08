import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Service} from '../../../../models/service';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.scss']
})
export class ServiceItemComponent implements OnInit {

  @Input() service: Service = null;
  @Output() onEdit = new EventEmitter<Service>();
  @Output() onDelete = new EventEmitter<Service>();

  constructor() {
  }

  ngOnInit() {
  }

  editService() {
    this.onEdit.emit(this.service);
  }

  deleteService() {
    this.onDelete.emit(this.service);
  }

}
