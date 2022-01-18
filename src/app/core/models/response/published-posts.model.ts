export interface PublishedPosts {
    data:   PublishedPostsData[];
    paging: Paging;
}

export interface PublishedPostsData {
    id:         string;
    media_url?:  string;
    timestamp?:  string;
    media_type?: string;

    access_token?:  string;
    category?:      string;
    category_list?: CategoryList[];
    name?:          string;
    tasks?:         string[];
}

export interface CategoryList {
    id:   string;
    name: string;
}

export interface Paging {
    cursors: Cursors;
    next:    string;
}

export interface Cursors {
    before: string;
    after:  string;
}