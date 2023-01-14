import { DefaultResponse } from "../..";
import { FileInfo } from "../files";
import { UserInfo } from "../user";

export interface BbsPost {
    id: number;
    owner: UserInfo;
    title: string;
    content: string;
    header: string;
    board: string;
    postType: number;
    commentCount: number;
    createdDate: string;
    isPublic: boolean;
}

export interface BbsComment {
    id: number;
    owner: UserInfo;
    content: string;
    createdDate: string;
}

export interface GetBbsPostListRequest {
    board: string;
    postPage: number;
    postListSize: number;
}

export interface GetBbsPostListResponse extends DefaultResponse {
    postCount: number;
    list: BbsPost[];
}

export interface GetBbsPostRequest {
    board: string;
    postId: number;
}

export interface GetBbsPostResponse extends DefaultResponse {
    post: BbsPost;
    attachments?: FileInfo[];
}

export interface PostBbsPostRequest {
    title: string;
    content: string;
    header: string;
    board: string;
    isPublic: boolean;
}

export interface PostBbsPostResponse extends DefaultResponse {
    postId: number;
}

export interface PutBbsPostRequest {
    board: string;
    postId: number;
    title?: string;
    content?: string;
    header?: string;
    isPublic?: boolean;
}

export interface PutBbsPostResponse extends DefaultResponse {}

export interface DeleteBbsPostRequest {
    board: string;
    postId: number;
}

export interface DeleteBbsPostResponse extends DefaultResponse {}

export interface GetBbsPostHeaderRequest {
    board: string;
}

export interface GetBbsPostHeaderResponse extends DefaultResponse {
    headers: string[];
}

export interface GetBbsCommentListRequest {
    board: string;
    postId: number;
    commentPage: number;
    commentListSize: number;
}

export interface GetBbsCommentListResponse extends DefaultResponse {
    list: BbsComment[];
    commentCount: number;
}

export interface PostBbsCommentRequest {
    board: string;
    postId: number;
    content: string;
}

export interface PostBbsCommentResponse extends DefaultResponse {
    commentId: number;
}

export interface DeleteBbsCommentRequest {
    board: string;
    postId: number;
    commentId: number;
}

export interface DeleteBbsCommentResponse extends DefaultResponse {}
