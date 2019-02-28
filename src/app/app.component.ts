import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  public user: any;
  constructor(
    private route: Router
  ) { }
  public ngOnInit() {
    this.user = {
      name: 'Nick',
      email: 'mykola_borodyn@ecoengineer.in.ua',
      token: 'sdfls-lfj/flvnsdfjvn'
    };
  }
}
