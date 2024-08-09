export interface UserModel {
    id: number;
    forename: string;
    surname: string;
    address: { number: number; street: string; zipcode: number; city: string };
}
