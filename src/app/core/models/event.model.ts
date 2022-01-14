import { User } from "./user.model";

export interface Event {
    id: string;
    blurHash?: string;
    captureImageURL: string;
    createdByUserID: string;
    coshosts: any[];
    deletedCheck: boolean;
    detail: string;
    dynamicUrl: string;
    endAllDayCheck: string;
    path: string;
    postedDate: string;
    startDate: number;
    interestedCount: number;
    startAllDayCheck: boolean;
    location: string;
    goingCount: number;
    ignoreCount: number;
    shareCount: number;
    eventName: string;
    topAttendees: any[];
    user: User[];
}