import { Component, input } from '@angular/core';

@Component({
  selector: 'gif-list-item',
  imports: [],
  templateUrl: './gif-list-item.component.html',
})
export class GifListItemComponent {

  // TODO: imageUrl:string; input

  imageUrl = input.required<string>();




}
