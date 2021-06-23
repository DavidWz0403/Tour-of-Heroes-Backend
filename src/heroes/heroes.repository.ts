import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';
import { CreateHeroDto } from './dtos/createHero.dto';
import { Hero } from './interfaces/Hero';

export class HeroRepository{
    constructor(@InjectModel('Hero') private readonly heroModel: Model<Hero>){}

     createHeroRepo = async(createHeroDto: CreateHeroDto) => {
        const hero = await this.heroModel.aggregate([{ $sort: { id: -1 } }, { $limit: 1 }]);
        const newId : number = await hero[0].id + 1; 

        const {name, power} = createHeroDto;
        console.log(newId); 
        const newHero = new this.heroModel({
            id: newId,
            name, 
            power
        })
        
        const result = await newHero.save();
        return result
    }

    getHeroesRepo = async() => {
        const heroes = this.heroModel.find().exec();
        console.log(heroes);
        return heroes; 
    }


    getHeroByIdRepo = async (id: string) => {
        const hero = await this.findHero(id);
        
        return hero;
    }

    deleteHeroByIdRepo = async(id: string) => {
        const result = await this.heroModel.deleteOne({_id: id}).exec();
        if(result.n === 0) {
            throw new NotFoundException('Could not find hero');
        }
    }

    updateHeroRepo = async (id: string, name: string, power: string) => {
        const updatedHero = await this.heroModel.findById(id).exec(); 
        if(name) {
            updatedHero.name = name;
        }

        if(power) {
            updatedHero.power = power;
        }

        updatedHero.save(); 
    }



    private async findHero(id: string) : Promise<Hero> {
        let hero;
        try {
                hero = await this.heroModel.findById(id).exec(); 
        }catch (error) {
            throw new NotFoundException('Could not find hero');
        }

        if(!hero) {
            throw new NotFoundException('Could not find hero');
        }

        return hero; 
    }
}