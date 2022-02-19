import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { StartSwaggers } from './swagger/start.swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //* For swaggers
  const startSwaggers = new StartSwaggers(app);
  startSwaggers.start();


  await app.listen(3000);
  const appURL: string = await app.getUrl();
  console.log("🚀 ~ file: main.ts ~ line 15 ~ bootstrap ~ appURL", appURL);

}
bootstrap();
