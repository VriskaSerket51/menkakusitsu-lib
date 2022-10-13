import { SpecialroomInfo } from "..";
import { DefaultResponse } from "../..";

export interface GetApplyResponse extends DefaultResponse {
    specialroomInfo: SpecialroomInfo,
};

export interface PostApplyResponse extends DefaultResponse {
    specialroomInfo: SpecialroomInfo,
};

export interface DeleteApplyResponse extends DefaultResponse {
    specialroomInfo: SpecialroomInfo,
};

export interface GetInfoResponse extends DefaultResponse {
    information: SpecialroomInfo[],
}

export interface PutInfoResponse extends DefaultResponse {
    information: SpecialroomInfo[],
}