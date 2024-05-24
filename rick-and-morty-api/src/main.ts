import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import { AuthService } from './auth/auth.service';
import { LoggingInterceptor } from './logs/log.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      secret: 'chave',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 3600000 }
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  const authService = app.get(AuthService);
  passport.serializeUser((user, done) => authService.serializeUser(user, done));
  passport.deserializeUser((id, done) => authService.deserializeUser(id, done));

  app.useGlobalInterceptors(app.get(LoggingInterceptor));

  await app.listen(3000);
}
bootstrap();
