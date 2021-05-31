export class Report {
    id : string
    postedTo : string
    clubID : string
    userID : string
    postID : string
    successStatus : number   //(0 for Failed , 1 for Success)


    constructor(){
        this.id= "";
        this.postedTo = "";
        this.clubID = "";
        this.userID = "";
        this.postID = "";
        this.successStatus = 0
    }

}