import { FacebookProfileModel } from 'src/app/core/models/facebook-profile';
import { ClubProfileModel } from 'src/app/core/models/club-profile';
import { InstaProfile } from './insta-profile.model';
import { FBPage } from './fb-page.model';

export interface BaseClub {
    FBPages:             FBPage[];
    FBGroups:            any[];
    FBTimeline:          any;
    InstaTimeline:       any;
    FBuserID:            any;
    FBUserAuthToken:     string;
    userFacebookProfile: FacebookProfileModel;
    userInstaProfile:    InstaProfile;
    userClubProfile:     ClubProfileModel;
    sponsorPanelUrl:     string;
    clubName:            string;
    logoURL:             string;
    clubColor:           string;
    baseURL:             string;
    appPackageID:        string;
    isPicker?:           boolean;
    pickerClub?:         any;
    pickerModelId?:      string;
    deleteCheck:         boolean;
    id:                  string;
    projectID?:          string;
}