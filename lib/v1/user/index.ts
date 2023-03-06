import { DefaultResponse } from "../..";

export interface UserInfo {
    uid: number;
    value: string;
    name: string;
}

export interface UserPrivateInfo {
    uid?: number;
    sid?: number;
    id?: string;
    name?: string;
    email?: string;
    password?: string;
}

export interface GetMyPrivateInfoRequest { }

export interface GetMyPrivateInfoResponse extends DefaultResponse {
    private: UserPrivateInfo;
}

export interface PutEmailRequest {
    oldEmail: string;
    newEmail: string;
}

export interface PutEmailResponse extends DefaultResponse {
    newEmail: string;
}

export interface PutPasswordRequest {
    oldPassword: string;
    newPassword: string;
}

export interface PutPasswordResponse extends DefaultResponse {
    newPassword: string;
}

export interface PostUserNameFromTokenRequest {
    token: string;
}

export interface PostUserNameFromTokenResponse extends DefaultResponse {
    name: string;
}

export interface PostChangeUserNameRequest {
    token: string;
    name: string;
}

export interface PostChangeUserNameResponse {
    name: string;
}

export * from "./push"
