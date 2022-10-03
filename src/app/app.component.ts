import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IronService } from './iron/iron.service';

@Component({
  selector: 'my-app',
  template: `
      <h3>Request</h3>
      <p><button (click)="request()">Request Quote</button></p> 
      <h3>Response</h3>{{response|async|json}}`
  ,
  styles: [`h1 { font-family: Lato; }`]
})
export class AppComponent  {
  name = 'Angular';

  response: Observable<any>;
  constructor(private http: HttpClient,
              private iron: IronService) {

  }

  request() {
      const url = 'api/quotes/1';
      this.response = this.http.get(url);
  }
}
