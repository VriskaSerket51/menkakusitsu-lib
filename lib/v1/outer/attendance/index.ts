import { DefaultResponse } from "../../..";

export interface GetOuterAttendanceInfoRequest {};

export interface GetOuterAttendanceInfoResponse extends DefaultResponse {
    info: string[];
};

export interface GetOuterAttendanceListRequest {
    when: number;
};

export interface GetOuterAttendanceListResponse extends DefaultResponse {
    list: {
        big: string[][];
        small: string[][];
    };
};
