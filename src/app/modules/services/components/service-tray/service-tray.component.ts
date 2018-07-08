import {Component, OnInit} from '@angular/core';
import {Constants} from '../../../../utils/constants';
import {Service} from '../../../../models/service';

@Component({
  selector: 'app-service-tray',
  templateUrl: './service-tray.component.html',
  styleUrls: ['./service-tray.component.scss']
})
export class ServiceTrayComponent implements OnInit {

  public filterService: number = null;
  public typeServices = Constants.LIST_TYPE_SERVICE;
  public listServices: Array<Service> = [
    {
      id: new Date().getTime(),
      name: 'Carro 1',
      description: 'Carro muy bonito',
      type: Constants.LIST_TYPE_SERVICE.CAR
    }
  ];
  public serviceSelected: Service = null;

  constructor() {
  }

  ngOnInit() {
  }

  onEdit(item: Service) {
    this.serviceSelected = item;
  }

  onDelete(item: Service) {
    if (confirm(`Seguro de eliminar ${item.name}?`)) {
      if (item) {
        let indexToDell: number = null;
        for (let i = 0; i < this.listServices.length; i++) {
          if (item.id === this.listServices[i].id) {
            indexToDell = i;
          }
        }
        if (indexToDell !== null) {
          this.listServices.splice(indexToDell, 1);
        }
      }
    }
  }

  onSaved(item: Service) {
    let indexSearch: number = null;
    for (let i = 0; i < this.listServices.length; i++) {
      if (item.id === this.listServices[i].id) {
        indexSearch = i;
      }
    }
    if (indexSearch !== null) {
      this.listServices.map((x: Service) => {
        if (x.id === item.id) {
          x.name = item.name.toString().trim();
          x.description = item.description.toString().trim();
          x.type = parseInt(item.type.toString().trim());
        }
      });
    } else {
      this.listServices = this.listServices.concat([item]);
    }
    this.serviceSelected = null;
  }

  onCancel(cancel: boolean) {
    if (cancel) {
      this.serviceSelected = null;
    }
  }

}
