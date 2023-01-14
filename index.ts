export interface DefaultResponse {
    status: number;
    message: string;
}

export const Permission = {
    Guest: 0,
    Student: 1,
    Teacher: 2,
    Dev: 100,
};

export class TokenPayload {
    public uid: number = 0;
    public id: string = "";
    public permission: number = 0;
    public type: string = "";
    public iat: number = 0;
    public exp: number = 0;
    public jti: string = "";

    hasPermission(permission: number) {
        return this.permission >= permission;
    }
}
