import { DefaultResponse } from "../..";

export interface PostRegisterRequest {
    id: string;
    sid: number;
    name: string;
    email: string;
    password: string;
};

export interface PostRegisterResponse extends DefaultResponse {
    // uid?: number;
};

export interface DeleteSecessionRequest {
    uid?: number;
    id?: string;
    name?: string;
};

export interface DeleteSecessionResponse extends DefaultResponse {};

export interface PostLoginRequest {
    id: string;
    password: string;
};

export interface PostLoginResponse extends DefaultResponse {
    accessToken: string;
    refreshToken: string;
    callbacks?: string[];
};

export interface DeleteLogoutRequest {};

export interface DeleteLogoutResponse extends DefaultResponse {};

export interface PostRefreshRequest {};

export interface PostRefreshResponse extends DefaultResponse {
    accessToken: string;
    refreshToken: string;
};

export interface PutForgotPasswordRequest {
    id: string;
    email: string;
};

export interface PutForgotPasswordResponse extends DefaultResponse {};
