import { Component } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  constructor(private dataService: DataService){

  }
}
