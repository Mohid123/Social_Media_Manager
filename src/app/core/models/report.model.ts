export class Report {
    id : string
    postedTo : string
    clubID : string
    userID : string
    postID : string
    successStatus : number   //(0 for Failed , 1 for Success , 2 for Pending)
    postedTime: string | number | Date


    constructor(){
        this.id= "";
        this.postedTo = "";
        this.clubID = "";
        this.userID = "";
        this.postID = "";
        this.successStatus = 0
    }

}