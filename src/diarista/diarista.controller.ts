import { Controller, Get, Param, Render } from '@nestjs/common';

@Controller('diarista')
export class DiaristaController {
    @Get(':id')
    @Render('home')
    root(@Param('id') id: number) {
        const diaristas = [
            { name: 'Paulo', },
            { name: 'Bruna', },
        ];
        return { diarista: diaristas[id] };
    }
}
