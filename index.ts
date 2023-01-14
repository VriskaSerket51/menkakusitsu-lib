export interface DefaultResponse {
    status: number;
    message: string;
}

export enum Permission {
    Guest = 0,
    Student = 1,
    Teacher = 2,
    Dev = 100,
}

export type TokenPayload = {
    uid: number;
    id: string;
    permission: number;
};
