import { Media } from './media-model';
import { User } from './user.model';

export class Polls {
    id?: string;
    userID?: string;
    choices?: [
        {
            choiceType?: string;
            choiceText?: string;
            choiceImage?: string;
            blurHash?: string;
            voteCount: number;
        }
    ];
    byUser?: string;
    type?: string;
    textFirst?: string;
    textSecond?: string;
    text?: string;
    captureFileURL?: string;
    hyperLink?: string;
    hyperlinkTextFirst?: string;
    hyperlinkTextSecond?: string;
    hyperlinkCaptureFileURL?: string;
    path?: string;
    viewsCount?: number;
    commentsCount?: number;
    reactionCount?: number;
    repostCount?: number;
    postedDate?: {};
    thumbnail?: string;
    thumbnailPath?: string;
    thumbnailURL?: string;
    repostCheck?: boolean;
    reportStatus?: boolean;
    approveForClub?: boolean;
    postedTo?: string;
    pinPost?: boolean;
    backgroundColorHex?: string;
    storyCheck?: boolean;
    storyTime?: number;
    blurHash?: string;
    totalVotesCount?: number;
    startDate?: number;
    startTime?: string;
    expiryDate?: number;
    expiryTime?: string;
    votingDays?: number;
    votingHours?: number;
    votingMinutes?: number;
    hideParticipantsDetails?: boolean;
    deletedCheck?: boolean;
    media?: Media;
    topVotes?: [
        {
            profilePicURL: string;
            id: string;
        }
    ]
    topReactions?: [
        {
          profilePicURL?: string;
          id?: string;
        }
      ];
    dynamicUrl?: string;
    createdAt?: Date;
    updatedAt?: Date;
    user?: User;
}