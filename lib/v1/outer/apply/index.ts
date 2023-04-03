import { OuterInfo } from "..";
import { DefaultResponse } from "../../..";
import { UserInfo } from "../../user";

export interface GetOuterApplyRequest {
    when: number,
};

export interface GetOuterApplyResponse extends DefaultResponse {
    specialroomInfo: OuterInfo,
};

export interface PostOuterApplyRequest {
    teacherUid: number,
    applicants: UserInfo[],
    location: string,
    purpose: string,
    when: number,
};

export interface PostOuterApplyResponse extends DefaultResponse {
    // specialroomInfo: SpecialroomInfo,
};

export interface DeleteOuterApplyRequest {
    when: number,
};

export interface DeleteOuterApplyResponse extends DefaultResponse {
    // specialroomInfo: SpecialroomInfo,
};