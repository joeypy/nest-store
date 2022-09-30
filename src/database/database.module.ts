import { Global, Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';


const API_KEY = '12345678';
const ApiKeyProvider = { provide: 'API_KEY', useValue: API_KEY };

@Global()
@Module({
  imports: [HttpModule],
  providers: [ApiKeyProvider, ],
  exports: ['API_KEY'],
})
export class DatabaseModule {}
