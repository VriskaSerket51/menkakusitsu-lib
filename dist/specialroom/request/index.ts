export interface GetApplyRequest {
    when: number,
};

export interface PostApplyRequest {
    teacherUid: number,
    applicants: string,
    location: string,
    purpose: string,
    when: number,
};