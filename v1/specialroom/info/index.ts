import { SpecialroomInfo } from "..";
import { DefaultResponse } from "../../..";

export interface GetInfoRequest {}

export interface GetInfoResponse extends DefaultResponse {
    information: SpecialroomInfo[];
}

export interface PutInfoRequest {
    information: SpecialroomInfo;
}

export interface PutInfoResponse extends DefaultResponse {
    information: SpecialroomInfo;
}

export interface LocationInfo {
    id: number;
    value: string;
}

export interface GetLocationInfoRequest {}

export interface GetLocationInfoResponse extends DefaultResponse {
    locationInfo: LocationInfo[];
}

export interface PurposeInfo {
    id: number;
    value: string;
}

export interface GetPurposeInfoRequest {}

export interface GetPurposeInfoResponse extends DefaultResponse {
    purposeInfo: PurposeInfo[];
}

export interface StudentInfo {
    uid: number;
    value: string;
    name: string;
}

export interface GetStudentInfoRequest {}

export interface GetStudentInfoResponse extends DefaultResponse {
    studentInfo: StudentInfo[];
}

export interface TeacherInfo {
    uid: number;
    value: string;
    name: string;
}

export interface GetTeacherInfoRequest {}

export interface GetTeacherInfoResponse extends DefaultResponse {
    teacherInfo: TeacherInfo[];
}