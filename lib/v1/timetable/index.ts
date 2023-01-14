import { DefaultResponse } from "../..";

export interface Timetable {
    timetableInfo: TimetableCell[][];
}

export interface TimetableCell {
    key: string;
    value: string;
}

export interface GetTimetableRequest {
    when: string;
}

export interface GetTimetableResponse extends DefaultResponse {
    timetable: Timetable;
}

export interface PutTimetableRequest {
    when: string;
    timetableInfo: TimetableCell[];
}

export interface PutTimetableResponse extends DefaultResponse {
    timetable: Timetable;
}
