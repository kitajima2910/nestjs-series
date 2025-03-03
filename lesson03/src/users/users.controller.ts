import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Get() // GET /users or /users?role=value&age=30
    findAll(@Query("role") role?: "INTERN" | "ENGINEER" | "ADMIN") {
        return this.usersService.findAll(role);
    }

    @Get(':id') // GET /users/:id
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(+id);
    }

    @Post() // POST /users
    create(@Body() user: { name: string; email: string; role: "ADMIN" | "ENGINEER" | "INTERN" }) {
        return this.usersService.create(user);
    }

    @Patch(":id") // PATCH /users/:id
    update(@Param('id') id: string, @Body() userUpdate: { name?: string; email?: string; role?: "ADMIN" | "ENGINEER" | "INTERN" }) {
        return this.usersService.update(+id, userUpdate);
    }

    @Delete(":id") // DELETE /users/:id
    remove(@Param('id') id: string) {
        return this.usersService.remove(+id);
    }

}
