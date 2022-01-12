export interface User {
    profilePicURL:            string;
    admin:                    boolean;
    demoAdmin:                boolean;
    fullName:                 string;
    username:                 string;
    email:                    string;
    gender:                   string;
    phoneNo:                  string;
    verificationStatus:       boolean;
    verificationId:           string;
    DOB:                      Date;
    followersCount:           number;
    followingCount:           number;
    approved:                 boolean;
    count:                    number;
    isOnline:                 boolean;
    device:                   string;
    appVersion:               string;
    socketId:                 string;
    deviceId:                 string;
    deviceType:               string;
    chatCheck:                boolean;
    path:                     string;
    blockFromApp:             boolean;
    sponsorFlag:              boolean;
    paidAmount:               number;
    language:                 string;
    darkModeCheck:            boolean;
    systemSettingsCheck:      boolean;
    clubMembershipType:       number;
    membershipCardNumber:     string;
    viewsCountLargeBanner:    number;
    viewsCountsmallBanner:    number;
    firstPlanBuy:             boolean;
    notificationTypeCheck:    boolean;
    seenNotificationCount:    number;
    postCount:                number;
    userIndex:                boolean;
    blurHash:                 string;
    sponsoredPostViewsCount:  number;
    sponsoredStoryViewsCount: number;
    id:                       string;
    isFollowed:               boolean;
}