import { IUser } from './';



export interface IOrder {
    _id?: string;
    user?: IUser | string;
    orderItems: IOrderItem[]
    shippingAddress: ShippingAddress;
    paymentResult?: string;
    
    numberOfItem: number;
    subTotal: number;
    tax: number;
    total: number;

    isPaid: boolean;
    paiAt?: string;
}

export interface IOrderItem {
    _id: string;
    titulo: string;
    size: string;
    quantity: number;
    slug: string;
    image: string;
    price: number;
}

export interface ShippingAddress {
    firstName: string;
    lastName: string;
    address: string;
    address2?: string;
    zip: string;
    city: string;
    phone: string;
    country: string;
}