import { DefaultResponse } from "../..";

export interface Subject {
    id: number;
    name: string;
    multiplier: number;
}

export interface GetSubjectListRequest {
    grade: number;
    semester: number;
}

export interface GetSubjectListResponse extends DefaultResponse {
    list: Subject[];
}