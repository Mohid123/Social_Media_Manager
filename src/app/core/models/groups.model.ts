import { User } from "./user.model";

export interface Group {
    admins?: any[];
    blurHash?: string;
    captureImageURL?: string;
    createdByUserID?: string;
    createdDate?: any;
    deletedCheck?: boolean;
    groupName?: string;
    id?: string;
    membersCount?: number;
    path?: string;
    postsCount?: number;
    isSelected?: boolean;
    topMembers?: [{
        id: string;
        profilePicURL: string;
    }];
    topModerators?: [{
        id: string;
        profilePicURL: string;
    }];
    user?: User[];
}