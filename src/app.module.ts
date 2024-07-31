import { Module } from '@nestjs/common';
import { DiaristaModule } from './diarista/diarista.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Diarista } from './diarista/diarista.entity';

@Module({
  imports: [DiaristaModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'curso_nest',
      entities: [Diarista],
      synchronize: true,
  })],
  controllers: [],
  providers: []
})
export class AppModule {}
