import { Role } from "../enum/role.enum";
import { BaseModel } from "../base/base.model";
import { Image } from "./image.model";
import { Product } from "app/vendor-features/products/models/product.model";

export class User extends BaseModel {
    firstName?: string;
    lastName?: string;
    fullName?: string;
    email: string;
    userName: string;
    phoneNumber: string;
    address: string;
    birthday: Date;
    gender: Gender;
    role?: Role;
    country: string;
    image: Image;
    password?: string;
    newPassword?: string; // for update password
    facebookAccount: string;
    instagramAccount: string;
    storeName: string;
    products?: Product[];

}
export enum Gender {
    MALE = "MALE",
    FEMALE = "FEMALE",
    OTHER = "OTHER"
}

export const GENDER_LIST: any = [
    { code: Gender.MALE, label: 'Male' },
    { code: Gender.FEMALE, label: 'Female' },
    { code: Gender.OTHER, label: 'Other' }
];
