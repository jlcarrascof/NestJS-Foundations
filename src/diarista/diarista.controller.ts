import { Controller, Get, Render } from '@nestjs/common';

@Controller('diarista')
export class DiaristaController {
    @Get()
    @Render('home')
    root() {
        // return 'Example of route GET /diarista:!';
    }
}
