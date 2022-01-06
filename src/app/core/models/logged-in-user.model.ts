import { ClubProfileModel } from 'src/app/core/models/club-profile';
import { InstaProfile } from './insta-profile.model';
import { FacebookProfileModel } from 'src/app/core/models/facebook-profile';
import { FBPage } from './fb-page.model';
export class LoggedInUser {
    id : string
    clubID : string
    FBPages : FBPage[]
    FBGroups : string[]
    FBTimeline : string
    InstaTimeline : string
    userID : string // For his club
    FBUserAuthToken : string
    FBuserID : string
    userFacebookProfile: FacebookProfileModel;
    userInstaProfile:    InstaProfile;
    userClubProfile:     ClubProfileModel;
    __v:                 number;
}