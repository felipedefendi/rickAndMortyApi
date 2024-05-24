import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/user.module';
import { RickAndMortyModule } from './rick-and-morty/rick-and-morty.module';
import { LogsModule } from './logs/log.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/rick-and-morty'),
    AuthModule,
    UsersModule,
    RickAndMortyModule,
    LogsModule,
  ],
})
export class AppModule {}
