import { DefaultResponse } from "../../..";
import { UserInfo } from "../../user";

export interface OuterStudentInfo {
    student: UserInfo;
    reason: string;
    until?: number;
}


export interface OuterInfo {
    applyId: number,
    state: number,
    master: UserInfo,
    teacher: UserInfo,
    applicants: string,
    location: string,
    purpose: string,
    when: number,
};

export interface PostOuterRequest {
    teacherUid: number,
    applicants: UserInfo[],
    location: string,
    purpose: string,
};


export interface GetOuterStudentInfoRequest {
}

export interface GetOuterStudentInfoResponse extends DefaultResponse {
    outerStudentInfo: String[];
}

export interface GetAttendanceListRequest {
    when: number;
}

export interface GetAttendanceListResponse extends DefaultResponse {
    info: string[][];
}


export interface PostOuterStudentInfoRequest {
    outerStudentInfo: OuterStudentInfo;
}

export interface PostOuterStudentInfoResponse extends DefaultResponse {}

export interface DeleteOuterStudentInfoRequest {
    studentUid: number;
}

export interface DeleteOuterStudentInfoResponse extends DefaultResponse {}
