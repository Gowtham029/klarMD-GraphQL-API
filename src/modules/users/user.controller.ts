import {
    Body,
    Controller,
    Get,
    HttpStatus,
    Post,
    UsePipes,
    ValidationPipe,
    Param,
    Query,
    HttpException,
    Put,
} from "@nestjs/common";
import {
    ApiBearerAuth,
    ApiResponse,
    ApiTags,
    ApiBody,
    ApiParam,
    ApiQuery,
} from "@nestjs/swagger";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserService } from "./user.service";
import { CreateUpdateUserResponseDto } from "./dto/create-update-user-response.dto";
import { AuthService } from "../../common/middlewares/auth/auth.service";

@Controller("users")
@ApiTags("users")
@ApiBearerAuth()
export class UserController {
    public constructor(
        private readonly userService: UserService,
        private readonly authService: AuthService,
    ) {}

    @Get("/")
    @ApiQuery({ name: "skip", example: 0 })
    @ApiQuery({ name: "limit", example: 0 })
    async getAllUsers(@Query() query) {
        const limit = query.limit ? Number(query.limit) : 10;
        const skip = query.skip ? Number(query.skip) : 0;
        const result = await this.userService.getUsers(skip, limit);
        return result;
    }

    @Get("/:id")
    @ApiParam({ name: "id", description: "Id of the user" })
    async getUserById(@Param("id") id: string) {
        if (!id) {
            throw new HttpException("Provide Valid Id", HttpStatus.BAD_REQUEST);
        }
        const result = await this.userService.getUserById(id);
        return result;
    }

    @Put("/:id")
    @UsePipes(ValidationPipe)
    @ApiBody({ type: CreateUserDto })
    @ApiResponse({ type: CreateUpdateUserResponseDto, description: "response" })
    async updateUser(
        @Body() createUserDto: CreateUserDto,
        @Param("id") id: string,
    ) {
        if (!id) {
            throw new HttpException("Provide Valid Id", HttpStatus.BAD_REQUEST);
        }
        const result = await this.userService.update(id, createUserDto);
        return result;
    }
}
