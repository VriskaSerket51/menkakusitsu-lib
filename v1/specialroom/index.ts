import { StudentInfo, TeacherInfo } from "./info";

export interface SpecialroomInfo {
    applyId: number,
    state: number,
    master: StudentInfo,
    teacher: TeacherInfo,
    applicants: string,
    location: string,
    purpose: string,
    when: number,
};

export * from "./apply";
export * from "./attendance";
export * from "./info";