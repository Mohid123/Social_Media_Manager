import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'dateFormatIG' })
export class MomentPipeIG implements PipeTransform {
    transform(value: any | moment.Moment): any {
        return new Date(value).getDate() + ' ' + moment().month(new Date(value).getMonth()).format("MMMM");
    }
}