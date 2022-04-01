import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MongooseModule } from '@nestjs/mongoose';
import { APP_DEFAULT } from './app.constant';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: 'mongodb://localhost:27017/test',
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
    }),
    ClientsModule.register([
      {
        name: APP_DEFAULT,
        transport: Transport.NATS,
        options: {
          servers: ['nats://localhost:4222'],
        },
      },
    ]),
  ],
})
export class AppModule {}
