import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CocineroModule } from './cocinero/cocinero.module';
import { PreparacionModule } from './preparacion/preparacion.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://polito98ec:P140618@cluster0.xve90ex.mongodb.net/CasaDelSabor?retryWrites=true&w=majority'),
    CocineroModule, 
    PreparacionModule, 
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
