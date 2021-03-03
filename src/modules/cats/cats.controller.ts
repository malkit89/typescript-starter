import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CreateCatDto } from './dtos/create-cat-dto'
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}

    @Get()
    findAll(): Promise<Cat[]> {
         return this.catsService.findAll();
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
        this.catsService.create(createCatDto);
    }
}
