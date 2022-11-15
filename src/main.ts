import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
require('dotenv').config();
const mongoose = require('mongoose');

const password = process.env.DB_PASSWORD;
const mongoAtlasUri = `mongodb+srv://alexkhoury:${password}@tezosexer-server.nhc2rxe.mongodb.net/?retryWrites=true&w=majority`;


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  mongoose.connect(mongoAtlasUri, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
    console.log("connected"));
}
bootstrap();
