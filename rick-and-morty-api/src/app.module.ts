import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RickAndMortyModule } from './rick-and-morty/rick-and-morty.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/rick-and-morty'),
    AuthModule,
    UsersModule,
    RickAndMortyModule,
  ],
})
export class AppModule {}
