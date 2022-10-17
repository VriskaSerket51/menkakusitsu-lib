import { DefaultResponse } from "../../..";

export interface GetAttendanceInfoRequest {
};

export interface GetAttendanceInfoResponse extends DefaultResponse {
    info: string[],
};

export interface GetAttendanceListRequest {
    when: number,
};

export interface GetAttendanceListResponse extends DefaultResponse {
    list: string[][],
};