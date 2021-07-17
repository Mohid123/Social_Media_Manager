import { environment } from '../environments/environment';

export const constants = {
    clubApiUrl: localStorage.getItem('selectedClub') ? JSON.parse(localStorage.getItem('selectedClub')).baseURL : "" ,
    api_url: 'https://socialapi.solissol.com/api/v1/en' ,
    base_url: 'https://graph.facebook.com/',
    app_id: '132795392262404',
    app_secret: '3485268dc803c40732f47998c447e4b0'
}

// live api url = 'https://socialapi.solissol.com/api/v1/en'
// local api irl = 'http://192.168.1.106:3005'