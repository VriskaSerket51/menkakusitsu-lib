import { DefaultResponse } from "../../..";
import { UserInfo } from "../../user";

export interface OuterStudentInfo {
    student: UserInfo;
    reason: string;
    until?: number;
}

export interface GetOuterStudentInfoRequest {
}

export interface GetOuterStudentInfoResponse extends DefaultResponse {
    outerStudentInfo: OuterStudentInfo[];
}

export interface PostOuterStudentInfoRequest {
    outerStudentInfo: OuterStudentInfo;
}

export interface PostOuterStudentInfoResponse extends DefaultResponse {}

export interface DeleteOuterStudentInfoRequest {
    studentUid: number;
}

export interface DeleteOuterStudentInfoResponse extends DefaultResponse {}
