import { SpecialroomInfo } from "..";
import { DefaultResponse } from "../../..";
import { UserInfo } from "../../user";

export interface GetInfoRequest {}

export interface GetInfoResponse extends DefaultResponse {
    information: SpecialroomInfo[];
}

export interface PutInfoRequest {
    information: SpecialroomInfo[];
}

export interface PutInfoResponse extends DefaultResponse {
    information: SpecialroomInfo[];
}

export interface LocationInfo {
    id: number;
    value: string;
}

export interface GetManagerRequest {
    when: string;
}

export interface GetManagerResponse extends DefaultResponse {
    manager: UserInfo;
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

export interface GetStudentInfoRequest {}

export interface GetStudentInfoResponse extends DefaultResponse {
    studentInfo: UserInfo[];
}

export interface GetTeacherInfoRequest {}

export interface GetTeacherInfoResponse extends DefaultResponse {
    teacherInfo: UserInfo[];
}
