export class BaseModel {
    _id: string;
    code: string;
    status = true;
    deleted = false;
}

export interface IPage<T> {
    docs: T[];
    currentPage: number;
    totalItems: number;
    totalPages: number;
}

export interface IResponse<T> {
    data: T;
    status: string;
}
