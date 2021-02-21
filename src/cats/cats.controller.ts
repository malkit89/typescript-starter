import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CreateCatDto } from './dtos/create-cat-dto'

@Controller('cats')
export class CatsController {
    @Get()
    findAll(): Promise<string> {
        return new Promise(function (resolve) {
            setTimeout(() => {
                resolve('Cats result da Promise');
            }, 500);
        })
    }

    // @Get('docs')
    // @Redirect('https://docs.nestjs.com', 302)
    // docs(){
    //     return  { url: 'https://docs.nestjs.com/v5/' };
    // }


    @Get(':id')
    findById(@Param() params): string {
        return 'Get by Id ' + params.id;
    }

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        console.log(createCatDto)
        return 'This action adds a new cat';
    }
}
