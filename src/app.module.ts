import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { join } from "path";

import { AppController } from "./app.controller";
import { GraphQLModule } from "@nestjs/graphql";
import { CatModule } from "./cat/cat.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: ".env",
            isGlobal: true,
        }),
        MongooseModule.forRoot(process.env.MONGO_DB_URI, {
            useCreateIndex: true,
            useNewUrlParser: true,
        }),
        GraphQLModule.forRoot({
            autoSchemaFile: join(process.cwd(), "src/schema.gql"),
            sortSchema: true,
            playground: true,
            debug: false,
        }),
        CatModule,
    ],
    controllers: [AppController],
})
export class AppModule {}
