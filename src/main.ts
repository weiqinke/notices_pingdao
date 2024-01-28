import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { NoticeModule } from './server/notices.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    NoticeModule,
    {
      transport: Transport.GRPC,
      options: {
        url: '127.0.0.1:3002',
        package: 'notices_module_pingdao',
        protoPath: join(__dirname, 'protobufs/notices_module_pingdao.proto'),
      },
    },
  );
  await app.listen();
}
bootstrap();
