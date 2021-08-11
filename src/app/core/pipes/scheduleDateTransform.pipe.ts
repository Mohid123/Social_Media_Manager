import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'scheduleDateTransform' })
export class ScheduleDateTransform implements PipeTransform {
    transform(value: any | moment.Moment): any {
        return new Date(value).toLocaleString();
    }
}