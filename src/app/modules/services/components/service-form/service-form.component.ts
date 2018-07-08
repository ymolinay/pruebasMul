import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Service} from '../../../../models/service';
import {FormControl, FormGroup, NgSelectOption, Validators} from '@angular/forms';
import {Constants} from '../../../../utils/constants';
import {IOption} from 'ng-select';
import {Helpers} from '../../../../utils/helpers';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.scss']
})
export class ServiceFormComponent implements OnInit {

  public formService: FormGroup;
  public name: FormControl;
  public description: FormControl;
  public type: FormControl;
  public typeOptions: Array<IOption> = [];

  private _inService: Service = null;

  get inService(): Service {
    return this._inService;
  }

  @Input()
  set inService(value: Service) {
    this._inService = value;
    this.setValueInForm(this.inService);
  }

  @Output() onSave = new EventEmitter<Service>();
  @Output() onCancel = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
    this.createForm();
    this.setOptions();
  }

  setOptions() {
    const opts = Constants.LIST_TYPE_SERVICE;
    let tmpOptions: Array<IOption> = [];
    for (const item in opts) {
      tmpOptions.push({
        value: opts[item].toString(),
        label: item.toString(),
      });
    }
    this.typeOptions = tmpOptions;
  }

  createForm() {
    this.name = new FormControl('', Validators.required);
    this.description = new FormControl('', Validators.required);
    this.type = new FormControl('', Validators.required);

    this.formService = new FormGroup({
      name: this.name,
      description: this.description,
      type: this.type,
    });
  }

  setValueInForm(iService: Service = null) {
    if (iService) {
      this.name.setValue(iService.name.toString());
      this.description.setValue(iService.description.toString());
      this.type.setValue(iService.type.toString());
    }
  }

  saveService() {
    if (this.formService.valid) {
      let _id = null;
      if (this.inService && this.inService.id) {
        _id = this.inService.id;
      } else {
        _id = new Date().getTime();
      }
      const newService: Service = new Service(_id, this.name.value, this.description.value, parseInt(this.type.value));
      this.onSave.emit(newService);

      this.inService = null;
      this.formService.reset();
    } else {
      Helpers.validateAllFormFields(this.formService);
    }
  }

  cancel() {
    this.inService = null;
    this.formService.reset();
    this.onCancel.emit(true);
  }

}
