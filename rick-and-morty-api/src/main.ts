import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import { AuthService } from './auth/auth.service';
import { LoggingInterceptor } from './common/logging.interceptor';
import { ValidationPipe } from '@nestjs/common';
import { LogsService } from './logs/log.service';
import { getModelToken } from '@nestjs/mongoose';
import { Log } from './logs/log.schema';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  app.use(
    session({
      secret: 'chave',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 3600000 },
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  const authService = app.get(AuthService);
  passport.serializeUser((user, done) => authService.serializeUser(user, done));
  passport.deserializeUser((id, done) => authService.deserializeUser(id, done));

  const logsService = app.get(LogsService);
  const logModel = app.get(getModelToken(Log.name));

  app.useGlobalInterceptors(new LoggingInterceptor(logsService, logModel));

  await app.listen(3000);
}
bootstrap();
