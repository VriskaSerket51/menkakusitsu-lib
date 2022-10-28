import { DefaultResponse } from "../..";
import { UserInfo } from "../user";

export interface BbsPost {
    id: number;
    owner: UserInfo;
    title: string;
    content: string;
    postType: number;
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
    postCount: number;
}

export interface GetBbsPostListResponse extends DefaultResponse {
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
}

export interface PostBbsPostResponse extends DefaultResponse {
    post?: BbsPost;
}

export interface DeleteBbsPostRequest {
    id: number;
}

export interface DeleteBbsPostResponse extends DefaultResponse {
    post?: BbsPost;
}

export interface GetBbsCommentListRequest {
    commentPage: number;
    commentListSize: number;
    commentCount: number;
}

export interface GetBbsCommentListResponse extends DefaultResponse {
    list: BbsComment[];
}

export interface PostBbsCommentRequest {
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
