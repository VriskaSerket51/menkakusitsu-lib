export interface SpecialroomInfo {
    applyId: number,
    state: number,
    master: string,
    teacher: string,
    applicants: string,
    location: string,
    purpose: string,
    when: number,
};

export * from "./apply";
export * from "./attendance";
export * from "./info";