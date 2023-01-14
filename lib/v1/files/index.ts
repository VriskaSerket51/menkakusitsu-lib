import { UserInfo } from "../user";

export interface FileInfo {
    owne: UserInfo;
    fileName: string;
    downloadLink: string;
    isImage: boolean;
}
