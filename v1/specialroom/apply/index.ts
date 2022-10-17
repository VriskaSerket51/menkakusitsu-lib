import { SpecialroomInfo, StudentInfo } from "..";
import { DefaultResponse } from "../../..";

export interface GetApplyRequest {
    when: number,
};

export interface GetApplyResponse extends DefaultResponse {
    specialroomInfo: SpecialroomInfo,
};

export interface PostApplyRequest {
    teacherUid: number,
    applicants: StudentInfo[],
    location: string,
    purpose: string,
    when: number,
};

export interface PostApplyResponse extends DefaultResponse {
    specialroomInfo: SpecialroomInfo,
};

export interface DeleteApplyRequest {
    when: number,
};

export interface DeleteApplyResponse extends DefaultResponse {
    specialroomInfo: SpecialroomInfo,
};