import { DefaultResponse } from "../../..";

export interface GetIdbotChatRequest {
    chatInput: string;
}

export interface GetIdbotChatResponse extends DefaultResponse {
    chatOutput: string;
}
