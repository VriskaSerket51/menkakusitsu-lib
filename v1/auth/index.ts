import { DefaultResponse } from "../..";

export interface PostLoginRequest {
    id: string;
    password: string;
}

export interface PostLoginResponse extends DefaultResponse {
    accessToken: string;
    refreshToken: string;
    callbacks?: string[];
}

export interface DeleteLogoutRequest {}

export interface DeleteLogoutResponse extends DefaultResponse {}

export interface PostRefreshRequest {}

export interface PostRefreshResponse extends DefaultResponse {
    accessToken: string;
    refreshToken: string;
}
