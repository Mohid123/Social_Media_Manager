import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class VideoProcessingService {

  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) { }

  public generateThumbnail(videoFile: Blob): Promise<any> {
    const video: HTMLVideoElement = this.document.createElement('video');
    const canvas: HTMLCanvasElement = this.document.createElement('canvas');
    const context: CanvasRenderingContext2D = canvas.getContext('2d');
    return new Promise<string>((resolve, reject) => {
      canvas.addEventListener('error', reject);
      video.addEventListener('error', reject);
      video.addEventListener('canplay', event => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
        resolve(canvas.toDataURL());
      });
      if (videoFile.type) {
        video.setAttribute('type', videoFile.type);
      }
      video.preload = 'auto';
      video.src = window.URL.createObjectURL(videoFile);
      video.load();
    });
  }

  dataURLtoFile(dataurl, filename) {
    return new Promise((resolve, reject) => {

      var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }

      resolve(new File([u8arr], filename, { type: 'image/jpeg' }));
    })
  }

  rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }).join('')

 get_average_rgb(img) {
    return new Promise((resolve, reject) => {
      var context = document.createElement('canvas').getContext('2d');
      if (typeof img == 'string') {
        var src = img;
        img = new Image;
        img.setAttribute('crossOrigin', '');
        img.src = src;
      }
      context.imageSmoothingEnabled = true;
      context.drawImage(img, 0, 0, 100, 100);
      let imageData = context.getImageData(0, 0, 1, 1).data.slice(0, 3);
      resolve(imageData);
    })
  }

  getAverageRGB(imgEl) {
    return new Promise((resolve, reject) => {
      var blockSize = 5; // only visit every 5 pixels
      let defaultRGB = { r: 0, g: 0, b: 0 }; // for non-supporting envs
      let canvas = document.createElement('canvas')
      let context = canvas.getContext('2d');
      let data;
      let width;
      let height;
      let i = -4;
      let length;
      let rgb = { r: 0, g: 0, b: 0 };
      let count = 0;
      if (typeof imgEl == 'string') {
        var src = imgEl;
        imgEl = new Image;
        imgEl.setAttribute('crossOrigin', '');
        imgEl.src = src;
      }

      if (!context) {
        return defaultRGB;
      }

      height = canvas.height 
      width = canvas.width 
       context.imageSmoothingEnabled = true;
      
      context.drawImage(imgEl, 0, 0, 20, 12);

      try {
        data = context.getImageData(0, 0, width, height);
      } catch (e) {
        /* security error, img on diff domain */
        return defaultRGB;
      }

      length = data.data.length;

      while ((i += blockSize * 4) < length) {

        ++count;
        rgb.r += data.data[i];
        rgb.g += data.data[i + 1];
        rgb.b += data.data[i + 2];
      }

      // ~~ used to floor values
      rgb.r = ~~(rgb.r / count);
      rgb.g = ~~(rgb.g / count);
      rgb.b = ~~(rgb.b / count);

      resolve(rgb);
    })
  }



}
