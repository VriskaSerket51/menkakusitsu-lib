import { DefaultResponse } from "../..";
import { UserInfo } from "../user";

export interface BbsPost {
    id: number;
    owner: UserInfo;
    title: string;
    content: string;
    header: string;
    postType: number;
    commentCount: number;
    createdDate: string;
}

export interface BbsComment {
    id: number;
    owner: UserInfo;
    content: string;
    createdDate: string;
}

export interface GetBbsPostListRequest {
    postPage: number;
    postListSize: number;
}

export interface GetBbsPostListResponse extends DefaultResponse {
    postCount: number;
    list: BbsPost[];
}

export interface GetBbsPostRequest {
    id: number;
}

export interface GetBbsPostResponse extends DefaultResponse {
    post: BbsPost;
}

export interface PostBbsPostRequest {
    title: string;
    content: string;
    header: string;
}

export interface PostBbsPostResponse extends DefaultResponse {
    post?: BbsPost;
}

export interface PutBbsPostRequest {
    title?: string;
    content?: string;
    header?: string;
}

export interface PutBbsPostResponse extends DefaultResponse {
    post?: BbsPost;
}

export interface DeleteBbsPostRequest {
    id: number;
}

export interface DeleteBbsPostResponse extends DefaultResponse {
    post?: BbsPost;
}

export interface GetBbsPostHeaderRequest {}

export interface GetBbsPostHeaderResponse extends DefaultResponse {
    headers: string[];
}

export interface GetBbsCommentListRequest {
    postId: number;
    commentPage: number;
    commentListSize: number;
}

export interface GetBbsCommentListResponse extends DefaultResponse {
    list: BbsComment[];
    commentCount: number;
}

export interface PostBbsCommentRequest {
    postId: number;
    content: string;
}

export interface PostBbsCommentResponse extends DefaultResponse {
    comment?: BbsComment;
}

export interface DeleteBbsCommentRequest {
    id: number;
}

export interface DeleteBbsCommentResponse extends DefaultResponse {
    comment?: BbsComment;
}
