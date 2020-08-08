export interface User {
    _id: string;
    email: string;
    name: string;
    username: string;
    token?: string;
    tokenExpirationDate?: Date;
    image?: string;
    google?: {
        id: string;
    };
    github?: {
        id: string;
    };
    linkedIn?: {
        id: string;
    };
}
