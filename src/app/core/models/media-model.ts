export class Media {
    url: string = '';
    path: string = '';
    type?: string = '';
    captureFileURL?: string = '';
    thumbnailURL?: string = '';
    thumbnailPath?: string = '';
    blurHash?: string = '';
    backgroundColorHex?: string = '';

    fieldname?:    string;
    originalname?: string;
    encoding?:     string;
    mimetype?:     string;
    destination?:  string;
    filename?:     string;
    size?:         number;
}