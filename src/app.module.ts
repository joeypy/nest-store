import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/products.module';
import { UserModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { HttpModule, HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

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
      envFilePath: '.env',
      isGlobal: true,
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
