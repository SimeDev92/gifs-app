import { AfterViewInit, Component, ElementRef, inject, viewChild } from '@angular/core';
import { GifService } from '../../services/gifs.service';
import { ScrollStateService } from '../../../shared/services/scroll-state.service';

@Component({
  selector: 'app-trending-page',
  imports: [],
  templateUrl: './trending-page.component.html',
})
export default class TrendingPageComponent implements AfterViewInit{

  ngAfterViewInit(): void {

    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if( !scrollDiv ) return;

    scrollDiv.scrollTop = this.scrollStateService.trendingScrollState();
  }

  gifService = inject(GifService);
  scrollStateService = inject(ScrollStateService);

  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv')

  onScroll( event: Event ) {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if( !scrollDiv ) return;

    const scrollTop = scrollDiv.scrollTop;
    const clientHeight = scrollDiv.clientHeight;
    const scrollHeight = scrollDiv.scrollHeight;

    // console.log({  scrollTotal:  scrollTop + clientHeight, scrollHeight });
    const isAtBottom = scrollTop + clientHeight >= scrollHeight;

    this.scrollStateService.trendingScrollState.set(scrollTop)

    if ( isAtBottom ) {
      this.gifService.loadTrendingGifs();
    }

  }


}
