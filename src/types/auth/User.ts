export interface User {
    _id: string;
    email?: string;
    name?: string;
    username?: string;
    password?: string;
    token?: string;
    tokenExpirationDate?: Date;
    image?: string;
    google?: {
        id: string;
        data: { [key: string]: any };
    };
    github?: {
        id: string;
        data: { [key: string]: any };
    };
    linkedIn?: {
        id: string;
        data: { [key: string]: any };
    };
}
