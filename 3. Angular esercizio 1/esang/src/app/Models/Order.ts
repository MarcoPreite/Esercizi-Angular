export interface Order {
    id: number,
    code: string,
    name: string,
    surname: string,
    location: string,
    date?: Date,
    description: string
}