import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent {
  @Input() titulo: string = "Noticia Uniesp";
  @Input() descricao: string = "Descricao";
  @Input() texto: string = "texto";
  constructor() { 
  }
}
