 export interface IProduct {
    id?: number,
    name: string,
    price: number,
    status: boolean,
    subject:string

}
export interface IUser{
    id?: number,
    username?:string,
    email?:string,
    password?: string,
    image?: string,
    role?: number
}