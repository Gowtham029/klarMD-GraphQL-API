import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Cat, CatSchema } from "./cat.model";
import { CatResolver } from './cat.resolver';
import { CatService } from "./cat.service";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Cat.name, schema: CatSchema },
        ]),
    ],
    providers: [CatResolver, CatService],
})
export class CatModule {}
