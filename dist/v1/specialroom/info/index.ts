import { SpecialroomInfo } from "..";
import { DefaultResponse } from "../../..";

export interface GetInfoResponse extends DefaultResponse {
    information: SpecialroomInfo[],
};

export interface PutInfoResponse extends DefaultResponse {
    information: SpecialroomInfo,
};