import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const PORT = process.env.PORT || 3000;

    const options = new DocumentBuilder()
        .setTitle("klarMD GraphQL API")
        .setDescription("klarMD GraphQL API")
        .setVersion("1.0")
        .addTag("klarMD GraphQL API")
        .addBearerAuth()
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup("api-docs", app, document);
    await app.listen(PORT);
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
