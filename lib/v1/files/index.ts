import { UserInfo } from "../user";

export interface FileInfo {
    owner: UserInfo;
    fileName: string;
    downloadLink: string;
    mimeType: string;
};
