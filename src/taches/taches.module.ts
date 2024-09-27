import { Module } from '@nestjs/common';
import { TachesController } from './taches.controller';
import { TachesService } from './taches.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Tache, TacheSchema } from './tache.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Tache.name, schema: TacheSchema }])],
  controllers: [TachesController],
  providers: [TachesService]
})
export class TachesModule {}
