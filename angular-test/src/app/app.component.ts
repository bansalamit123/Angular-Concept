import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, Observable, timer } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  message: string = 'Hello, Angular!';
  imageUrl = '/assets/files/logo.png'
  
  currentDate = new Date();
  user = { "id": 100 }
  someValue = 'hello'

}





