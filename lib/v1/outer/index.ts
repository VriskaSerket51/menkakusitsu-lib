import { UserInfo } from "../user";

export interface OuterInfo {
    applyId: number,
    state: number,
    master: UserInfo,
    teacher: UserInfo,
    applicants: string,
    location: string,
    purpose: string,
    when: number,
};


export * from "./apply";
export * from "./attendance";
export * from "./info";