export interface SingelPost {
    id:           string;
    picture:      string;
    attachments:  Attachments;
    created_time: string;
    pageName?: string;
}

export interface Attachments {
    data: SingelPostData[];
}

export interface SingelPostData {
    media:  Media;
    target: Target;
    title:  string;
    type:   string;
    url:    string;
}

export interface Media {
    image: Image;
}

export interface Image {
    height: number;
    src:    string;
    width:  number;
}

export interface Target {
    id:  string;
    url: string;
}