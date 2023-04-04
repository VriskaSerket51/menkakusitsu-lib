import { OuterInfo } from "..";
import { DefaultResponse } from "../../..";
import { UserInfo } from "../../user";

export interface GetOuterInfoRequest {};

export interface GetOuterInfoResponse extends DefaultResponse {
    information: OuterInfo[];
};

export interface PutOuterInfoRequest {
    information: OuterInfo[];
};

export interface PutOuterInfoResponse extends DefaultResponse {
    information: OuterInfo[];
};

export interface LocationInfo {
    id: number;
    value: string;
};

export interface GetOuterManagerRequest {
    when: string;
};

export interface GetOuterManagerResponse extends DefaultResponse {
    manager: UserInfo;
};

export interface GetOuterLocationInfoRequest {};

export interface GetOuterLocationInfoResponse extends DefaultResponse {
    locationInfo: LocationInfo[];
};

export interface PurposeInfo {
    id: number;
    value: string;
};

export interface GetOuterPurposeInfoRequest {};

export interface GetOuterPurposeInfoResponse extends DefaultResponse {
    purposeInfo: PurposeInfo[];
};

export interface GetOuterStudentInfoRequest {};

export interface GetOuterStudentInfoResponse extends DefaultResponse {
    studentInfo: UserInfo[];
};

export interface GetOuterTeacherInfoRequest {};

export interface GetOuterTeacherInfoResponse extends DefaultResponse {
    teacherInfo: UserInfo[];
};
