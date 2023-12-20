import { SpecialroomInfo } from "..";
import { DefaultResponse } from "../../..";
import { UserInfo } from "../../user";

export interface GetApplyRequest {
    when: number;
}

export interface GetApplyResponse extends DefaultResponse {
    specialroomInfo: SpecialroomInfo;
}

export interface PostApplyRequest {
    teacherUid: number;
    applicants: UserInfo[];
    location: string;
    purpose: string;
    when: number;
}

export interface PostApplyResponse extends DefaultResponse {
    // specialroomInfo: SpecialroomInfo,
}

export interface DeleteApplyRequest {
    when: number;
}

export interface DeleteApplyResponse extends DefaultResponse {
    // specialroomInfo: SpecialroomInfo,
}
