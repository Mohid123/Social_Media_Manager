export class Poll {
        choice1: string = '';
        choice2: string = '';
        choice3: string = '';
        choice4: string = '';
        votes1: string[] = [];
        votes2: string[] = [];
        votes3: string[] = [];
        votes4: string[] = [];
        totalVotesCount: number = 0;
        startDate: number = 0;
        startTime: Date = new Date();
        expiryDate: number = 0;
        expiryTime: Date = new Date();
        votingDays: number = 0;
        votingHours: number = 0;
        votingMinutes: number = 0;
    }
    