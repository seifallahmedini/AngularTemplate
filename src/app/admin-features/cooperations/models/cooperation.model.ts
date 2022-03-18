import { BaseModel } from "app/core/base/base.model";
import { User } from "app/core/models/user.model";
import { Product } from "app/vendor-features/products/models/product.model";

export class Cooperation extends BaseModel {
    requestStatus: string;
    product: Product;
    requestType: string;
    sender: User;
    receiver: User;
    status: boolean;
    deleted: boolean;

    constructor(json?: any) {
        super();
        if (json != undefined) {
            this.requestStatus = json.requestStatus;
            this.product = json.product;
            this.requestType = json.requestType;
            this.sender = json.sender;
            this.receiver = json.receiver;
            this.status = json.status;
            this.deleted = json.deleted;
        }
    }
}