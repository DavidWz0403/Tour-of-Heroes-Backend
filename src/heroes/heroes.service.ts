import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';

import { CreateHeroDto } from './dtos/createHero.dto';
import { HeroRepository } from './heroes.repository';

import { Hero } from './interfaces/Hero';

@Injectable()
export class HeroesService {
    constructor(private readonly heroRepo: HeroRepository){}

    async insertNewHero(createHeroDto: CreateHeroDto) {
       return this.heroRepo.createHeroRepo(createHeroDto); 
    }

     getHeroes = async() => {
        return this.heroRepo.getHeroesRepo(); 
    }

    getHeroById = async (id: string) => {
       return this.heroRepo.getHeroByIdRepo(id);
    }

    deleteHeroById = async(id: string) => {
        return this.heroRepo.deleteHeroByIdRepo(id); 
    }

    updateHero= async (id: string, name: string, power: string) => {
        return this.heroRepo.updateHeroRepo(id, name, power); 
    }

   
}
