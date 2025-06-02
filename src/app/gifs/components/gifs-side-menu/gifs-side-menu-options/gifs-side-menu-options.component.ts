import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GifService } from '../../../services/gifs.service';
import { Gif } from '../../../interfaces/gif.interface';

interface MenuOption {
  label: string;
  subLabel: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'gifs-side-menu-options',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './gifs-side-menu-options.component.html',
})
export class GifsSideMenuOptionsComponent {

  gifService = inject(GifService);
  items = signal<Gif[]>([])

  menuOptions: MenuOption[] = [

    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      subLabel: 'Gifs Populares',
      route: '/dashboard/trending'

    },
    {
      icon: 'fa-solid fa-magnifyiong-glass',
      label: 'Buscador',
      subLabel: 'Gifs Populares',
      route: '/dashboard/search'

    },

  ];

  recoverySearches(){
      this.gifService.searchGifs('')
      .subscribe(resp => {
        this.items.set(resp);
      })
  }

}
