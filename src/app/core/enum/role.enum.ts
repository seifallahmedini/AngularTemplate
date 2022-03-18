export enum Role {
    Admin = "Admin", 
    Vendor = "Vendor",
    Customer = "Customer"
}

export const ROLE_LIST: any = [
    { code: Role.Admin, label: 'Admin' },
    { code: Role.Vendor, label: 'Vendor' },
    { code: Role.Customer, label: 'Customer' }
];
