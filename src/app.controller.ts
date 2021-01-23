import { Controller, Get } from "@nestjs/common";
import { LoggerService } from "./common/interceptors/logger/logger.service";

@Controller()
export class AppController {
    @Get()
    ping(): string {
        return "pong";
    }
}
