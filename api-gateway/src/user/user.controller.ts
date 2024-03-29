import { Controller, Get, Post, Body } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ICreatedUserDTO } from './Core/DTOs/ICreateUserDTO';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  hello() {
    return 'this router workin with user';
  }

  @Post()
  registerUser(@Body() createUserRequest: ICreatedUserDTO) {
    console.log(createUserRequest);
    this.userService.create(createUserRequest);
  }

  @MessagePattern('user_reponse')
  handleUserCread(@Payload() data: string) {
    console.log(data);
  }
}
