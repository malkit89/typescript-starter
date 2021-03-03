import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = FakeData();

    create(cat: Cat) {
        this.cats.push(cat);
    }

    findAll(): Promise<Cat[]> {
        let self = this;
        return new Promise(function (resolve) {
            setTimeout(() => {
                resolve(self.cats);
            }, 500);
        })

    }
}

function FakeData(): Cat[] {
    let result: Cat[] = [];
    for (let i = 0; i < 5; i++) {
        let c = {
            name: "Nome " + i,
            age: i+20,
            breed: "Item " + i
        };
        result.push(c);
    }
    return result;
}
