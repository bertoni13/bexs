import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {JsonpModule, Jsonp} from '@angular/http';
@Injectable()
export class RestService {

	private url = 'http://www.mocky.io/v2/5d5ddda7330000078057bb78';
  constructor(public http: Http, private jsonp: Jsonp) {}

  getExampleApi(){
    return this.http.get(
			this.url
		);
  }
}
