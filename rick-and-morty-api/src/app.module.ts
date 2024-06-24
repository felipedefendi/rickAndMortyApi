import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RickAndMortyModule } from './rick-and-morty/rick-and-morty.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/user.module';
import { LogsModule } from './logs/log.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    RickAndMortyModule,
    AuthModule,
    UsersModule,
    LogsModule,  
    CommonModule,
  ],
})
export class AppModule {}
