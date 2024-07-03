import { Controller, Get } from '@nestjs/common';

@Controller('diarista')
export class DiaristaController {
    @Get()
    root() {
        return 'Example of route GET /diarista:!';
    }
}
