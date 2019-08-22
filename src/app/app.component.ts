import { Component } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { JsonpModule, Jsonp } from '@angular/http';
import { RestService } from './api/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[
 	RestService
 	]
})
export class AppComponent {
  title = 'teste-banco';
  public tes_msg: any = [];
  public name: string;
  public num: string;
  public date: string;
  public cvv: string;
  public versoCartao: boolean = false;
  private keyboard: 'Número de parcelas';
  private val: any[] = [{id: 1, name: "2x"}, {id: 2, name: "4x"}, {id: 3, name: "12x"}];
  private isOn: boolean = false;

  private toasterService: ToasterService;

  constructor(toasterService: ToasterService, private restService: RestService, private jsonp: Jsonp,) {
      this.toasterService = toasterService;
  }

  onBlur(val){
    if(val.length > 1) {
      this.isOn = true;
    }
  }
  send() {
    let body = {
      'numero': this.num,
      'nome': this.name,
      'validade': this.date,
      'cvv': this.cvv,
      'parcela': this.val
    }
    this.toasterService.pop('success', this.tes_msg);
  }
  get(){
    this.restService.getExampleApi().subscribe(data => {
      const res = (data as any)
      this.tes_msg = res._body
    })
  }
  ngOnInit() {
    this.get();
  }
}
