import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TachesModule } from './taches/taches.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Rendre les variables accessibles globalement dans l'application
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    TachesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
