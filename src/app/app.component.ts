import {Component} from '@angular/core';
import {Post} from './Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OCR-blog';

  posts: Post[] = [
    new Post('Mon premier post', 'Exemplar, calcaria, et sectam.'),
    new Post('Mon second post', 'Sunt bullaes vitare castus, noster fugaes.'),
    new Post('Mon troisième post', 'Mensas sunt nixs de noster classis.')
  ];
}
