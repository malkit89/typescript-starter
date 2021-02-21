import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];

    create(cat: Cat) {
        this.cats.push(cat);
    }

    findAll(): Promise<Cat[]> {
        let self=this;
        return new Promise(function (resolve) {
            setTimeout(() => {
                resolve(self.cats);
            }, 500);
        })

    }
}
