import { DefaultResponse } from "../../..";

export interface Notification {
    title: string;
    body: string;
    link?: string;
}

export interface PostPushRequest {
    targetUid: number;
    notification: Notification;
}

export interface PostPushResponse extends DefaultResponse {}

export interface PutPushRequest {
    pushToken: string;
    deviceId: string;
}

export interface PutPushResponse extends DefaultResponse {}

export interface DeletePushRequest {
    devcieId: string;
}

export interface DeletePushResponse extends DefaultResponse {}
