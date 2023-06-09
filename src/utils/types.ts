export interface User {
    id: string | null;
    name: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    phone: string | null;
    address: string | null;
    token: string;
    role: string;
    isDeleted: boolean;
}

export interface PaginatedResponse<T> {
    count: number
    data: T[]
}