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
