import { Body, Controller, Delete, Get, Param, Patch, Post, Res } from '@nestjs/common';
import { response } from 'express';
import { CreateHeroDto } from './dtos/createHero.dto';
import { HeroesService } from './heroes.service';
import { Hero } from './interfaces/Hero';

@Controller('heroes')
export class HeroesController {
    constructor
    (
        private readonly heroesService: HeroesService){}
    @Get()
    async getAllHeroes():Promise<Hero[]>{
        const heroes = await this.heroesService.getHeroes();
        return heroes; 
    }

    @Post()
    async createNewHero(@Body() createHeroDto: CreateHeroDto) {
        
       const newHero = await this.heroesService.insertNewHero(
           createHeroDto
       )
       return newHero
       
    }

    @Get(':id')

    async getHeroById(@Param('id') id:string) {
        return this.heroesService.getHeroById(id); 
    }


    @Patch(':id')

    async updateHero(
        @Param('id') id: string,
        @Body() createHeroDto: CreateHeroDto
    ) {
        await this.heroesService.updateHero(id, createHeroDto.name, createHeroDto.power )
    }

    @Delete(':id')

    async deleteHeroById(@Param('id') id: string){
        await this.heroesService.deleteHeroById(id);
        return null; 
    }
}
