import { environment } from '../environments/environment';

export const constants = {
    clubApiUrl: localStorage.getItem('selectedClub') ? JSON.parse(localStorage.getItem('selectedClub')).baseURL : "" ,
    api_url: 'https://social.teamtalkers.com/api/v1/en',
    base_url: 'https://graph.facebook.com/',
    app_id: '844857613045687',
    app_secret: '2159f936003b2d66dfa879da95a60da5'
}

// function getClubBaseUrl(){
// let localClub = localStorage.getItem('selectedClub');
// if(localClub){
//     return JSON.parse(localClub).baseURL;
// }
// else {
//     return "";
// }
// }