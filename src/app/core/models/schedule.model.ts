export class Schedule {
    id : string
    scheduleDateTime : Date
    postedTo : string // options (Facebook , Instagram , Youtube)
    status  //(0 for queue , 1 for unPublish, 2 for published) 
    deletedCheck : boolean = false
    postID : string
}