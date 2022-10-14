import { DefaultResponse } from "../../..";

export interface GetAttendanceInfoRequest {
};

export interface GetAttendanceInfoResponse extends DefaultResponse {
    info: string[],
};

export interface GetAttendanceListRequest {
};

export interface GetAttendanceListResponse extends DefaultResponse {
    list: string[][],
};