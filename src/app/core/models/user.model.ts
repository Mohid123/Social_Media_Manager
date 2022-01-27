export class User {
    superAdmin?:               boolean;
    pass?:                     string;
    password?:                 any;
    profilePicURL?:            string;
    admin?:                    boolean = false;
    demoAdmin?:                boolean;
    fullName?:                 string;
    username?:                 string;
    email?:                    string;
    gender?:                   string;
    phoneNo?:                  string;
    verificationStatus?:       boolean;
    verificationId?:           string;
    DOB?:                      Date | string;
    followersCount?:           number;
    followingCount?:           number;
    approved?:                 boolean;
    count?:                    number;
    isOnline?:                 boolean;
    device?:                   string;
    appVersion?:               string;
    socketId?:                 string;
    deviceId?:                 string;
    deviceType?:               string;
    chatCheck?:                boolean;
    path?:                     string;
    blockFromApp?:             boolean;
    sponsorFlag?:              boolean;
    paidAmount?:               number;
    language?:                 string;
    darkModeCheck?:            boolean;
    systemSettingsCheck?:      boolean;
    clubMembershipType?:       number;
    membershipCardNumber?:     string;
    viewsCountLargeBanner?:    number;
    viewsCountsmallBanner?:    number;
    firstPlanBuy?:             boolean;
    notificationTypeCheck?:    boolean;
    seenNotificationCount?:    number;
    postCount?:                number;
    userIndex?:                boolean;
    blurHash?:                 string;
    sponsoredPostViewsCount?:  number;
    sponsoredStoryViewsCount?: number;
    id?:                       string;
    isFollowed?:               boolean;
    clubMember?: {
        clubID?: string,
        count?: number,
        id?: string,
        statusType?: string,
        userID?: string
    }
}