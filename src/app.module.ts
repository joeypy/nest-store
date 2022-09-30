import { Module } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import * as Joi from 'joi';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/products.module';
import { UserModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { environment } from './environment';
import config from './config';

const TasksProvider = {
  provide: 'TASKS',
  useFactory: async (http: HttpService) => {
    const response = http.get('https://jsonplaceholder.typicode.com/todos');
    const tasks = await firstValueFrom(response);
    return tasks.data;
  },
  inject: [HttpService],
};
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environment[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        API_KEY: Joi.number().required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
      }),
    }),
    UserModule,
    HttpModule,
    ProductModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService, TasksProvider],
})
export class AppModule {}
