import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {PostgresService} from "./postgres.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {User} from "./user.entity";

@Controller('postgres')
export class PostgresController {
    constructor(private readonly usersService: PostgresService) {
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.usersService.create(createUserDto);
    }

    @Get()
    findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<User> {
        return this.usersService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.usersService.remove(id);
    }
}
