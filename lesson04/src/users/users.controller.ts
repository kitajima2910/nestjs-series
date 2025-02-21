import { BadRequestException, Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @Get() // GET /users or /users?role=value&age=30
    findAll(@Query("role") role?: "INTERN" | "ENGINEER" | "ADMIN") {
        return this.usersService.findAll(role);
    }

    @Get(':id') // GET /users/:id
    findOne(@Param('id', new ParseIntPipe({
        exceptionFactory: () => {
            new BadRequestException('ID không hợp lệ, phải là số nguyên')
        }
    })) id: number) {
        return this.usersService.findOne(id);
    }

    @Post() // POST /users
    create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }

    @Patch(":id") // PATCH /users/:id
    update(@Param('id', new ParseIntPipe({
        exceptionFactory: () => {
            return new BadRequestException('ID không hợp lệ, phải là số nguyên')
        }
    })) id: number, @Body(ValidationPipe) updateUserDto: UpdateUserDto) {
        return this.usersService.update(id, updateUserDto);
    }

    @Delete(":id") // DELETE /users/:id
    remove(@Param('id', new ParseIntPipe({
        exceptionFactory: () => {
            return new BadRequestException('ID không hợp lệ, phải là số nguyên')
        }
    })) id: number) {
        return this.usersService.remove(id);
    }

}
