import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { decode } from 'blurhash';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-blur-hash',
  templateUrl: './blur-hash.component.html',
  styleUrls: ['./blur-hash.component.scss']
})
export class BlurHashComponent  implements AfterViewInit {

  private blurHashValue!: string;
  @Input()
  get blurHash(): string {
    return this.blurHashValue;
  }
  set blurHash(value: string) {
    this.blurHashValue = value;
    this.decodeBlurHash();
  }

  private imageSrcValue!: string;
  @Input()
  get imageSrc(): string {
    return this.imageSrcValue;
  }
  set imageSrc(value: string) {
    this.imageSrcValue = value;
  }
  
  @Input() loading: string = 'eager';


  public imageLoaded = false;
  public imageLoad = false;

  @ViewChild('canvas')
  private canvas!: ElementRef<HTMLCanvasElement>;

  public canvasWidth = 32;
  public canvasHeight = 32;
  public build: any;

  public isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
  public ngAfterViewInit(): void {
    this.decodeBlurHash();
  }

  private decodeBlurHash() {
    if (this.canvas && this.blurHash) {
      const context = this.canvas.nativeElement.getContext('2d');
      const imageData = context.createImageData(this.canvasWidth, this.canvasHeight);
      const pixels = decode(this.blurHash, this.canvasWidth, this.canvasHeight);
      imageData.data.set(pixels);
      if(imageData)
        context.putImageData(imageData, 0, 0);
    }
  }
}
