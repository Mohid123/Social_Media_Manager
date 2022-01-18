export interface PublishedPosts {
    data:   PublishedPostsData[];
    paging: Paging;
}

export interface PublishedPostsData {
    media_url:  string;
    timestamp:  string;
    media_type: string;
    id:         string;
}

export interface Paging {
    cursors: Cursors;
    next:    string;
}

export interface Cursors {
    before: string;
    after:  string;
}