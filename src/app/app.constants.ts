import { environment } from '../environments/environment';

export const constants = {
    clubApiUrl: localStorage.getItem('selectedClub') ? JSON.parse(localStorage.getItem('selectedClub')).baseURL : "" ,
    api_url: 'https://socialapi.solissol.com/api/v1/en' ,
    base_url: 'https://graph.facebook.com/',
    app_id: '844857613045687',
    app_secret: '2159f936003b2d66dfa879da95a60da5'
}

// live api url = 'https://socialapi.solissol.com/api/v1/en'
// local api irl = 'http://192.168.1.106:3005'

//Local Development Facebook App Credentials
//app_id = 844857613045687
//app_secret = 2159f936003b2d66dfa879da95a60da5

//Live FB App Credentials
// app_id = 132795392262404
//app_secret = 47daa37c92753e89e294822d647d65cb