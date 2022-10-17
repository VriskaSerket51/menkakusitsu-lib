import { SpecialroomInfo } from "..";
import { DefaultResponse } from "../../..";

export interface GetInfoRequest extends DefaultResponse {}

export interface GetInfoResponse extends DefaultResponse {
    information: SpecialroomInfo[];
}

export interface PutInfoRequest extends DefaultResponse {
    information: SpecialroomInfo;
}

export interface PutInfoResponse extends DefaultResponse {
    information: SpecialroomInfo;
}
