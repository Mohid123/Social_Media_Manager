import { environment } from '../environments/environment';

export const constants = {
    clubApiUrl: localStorage.getItem('selectedClub') ? JSON.parse(localStorage.getItem('selectedClub')).baseURL : "" ,
    api_url: 'http://192.168.1.106:3005' ,
    base_url: 'https://graph.facebook.com/',
    app_id: '844857613045687',
    app_secret: '2159f936003b2d66dfa879da95a60da5'
}

// live api url = 'https://social.teamtalkers.com/api/v1/en'
// local api irl = 'http://192.168.1.106:3005'