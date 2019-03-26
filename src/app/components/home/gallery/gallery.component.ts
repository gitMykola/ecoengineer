import { Component } from '@angular/core';
import { Medias } from './gallery';
import { TranslatorService } from '../../../services/translator.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.less']
})
export class GalleryComponent {
  public feedbacks: any[];
  constructor(
    public ts: TranslatorService
  ) {
    this.feedbacks = [];
    let urls: string[];
    Medias.forEach(feed => {
      urls = [];
      feed.medias.forEach(m => urls.push('assets/images/' + m));
      this.feedbacks.push(urls);
    });
    console.dir(this.feedbacks);
  }
}
