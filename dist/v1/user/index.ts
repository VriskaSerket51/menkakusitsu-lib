import { DefaultResponse } from "../..";

export interface UserInfo {
    uid: number,
    sid: number,
    id: string,
    password: string,
    name: string,
    email: string,
    isTeacher: boolean,
};

export interface GetMeUserInfoRequest {
};

export interface GetMeUserInfoResponse extends DefaultResponse {
    me: UserInfo,
};