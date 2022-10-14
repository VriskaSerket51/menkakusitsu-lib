import { DefaultResponse } from "../../..";

export interface PostPushRequest {
    targetUid: number,
    notification: {
        title: string,
        body: string,
        link?: string,
    },
};

export interface PostPushResponse extends DefaultResponse {
};

export interface PutPushRequest {
    pushToken: string,
    deviceId: string,
};

export interface PutPushResponse extends DefaultResponse {
};

export interface DeletePushRequest {
    devcieId: string,
};

export interface DeletePushResponse extends DefaultResponse {
};