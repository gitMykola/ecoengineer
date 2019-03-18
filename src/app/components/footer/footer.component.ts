import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslatorService } from '../../services/translator.service';
import { Config } from '../../config';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  public config: any;
  constructor(
    private router: Router,
    public ts: TranslatorService
  ) {
    this.config = Config.app;
  }

  ngOnInit() {
  }

}
