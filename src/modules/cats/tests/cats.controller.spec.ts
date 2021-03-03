import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from '../cats.controller';
import { CatsService } from '../cats.service';

describe('CatsController', () => {
    let controller: CatsController;
    let catService: CatsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [CatsController],
            providers: [CatsService],
        }).compile();

        controller = module.get<CatsController>(CatsController);
        catService = module.get<CatsService>(CatsService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
