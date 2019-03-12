import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslatorService } from '../../services/translator.service';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  constructor(
    private router: Router,
    public ts: TranslatorService
  ) { }

  ngOnInit() {
  }

}
