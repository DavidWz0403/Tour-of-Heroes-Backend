import { Module } from '@nestjs/common';
import { HeroesController } from './heroes.controller';
import { HeroesService } from './heroes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HeroSchema } from './interfaces/Hero';
import { HeroRepository } from './heroes.repository';

@Module({ 
    imports: [MongooseModule.forFeature([{name: 'Hero', schema: HeroSchema}])],
    controllers: [HeroesController],
    providers: [HeroesService, HeroRepository],})
export class HeroesModule {}
