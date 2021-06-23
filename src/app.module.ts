import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { HeroesModule } from './heroes/heroes.module';

@Module({
  imports: [MongooseModule.forRoot(
    'mongodb://nestjs-admin:nestjs-admin@cluster0-shard-00-00.gyuhu.mongodb.net:27017,cluster0-shard-00-01.gyuhu.mongodb.net:27017,cluster0-shard-00-02.gyuhu.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-6siuqx-shard-0&authSource=admin&retryWrites=true&w=majority'
  ), HeroesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
