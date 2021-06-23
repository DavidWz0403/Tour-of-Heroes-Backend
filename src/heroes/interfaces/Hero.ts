import * as mongoose from 'mongoose';

export const HeroSchema = new mongoose.Schema({
    id: Number,
    name: String,
    power:String
})
export interface Hero {
    id: number,
    name: string,
    power: string
}

