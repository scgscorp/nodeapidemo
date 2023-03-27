import { JsonController, Param, Body, Get, Post, Put, Delete } from 'routing-controllers';
const fs = require('fs-extra');

@JsonController()
export class UserController {
  @Get('/users')
  getAll() {
    return {name: 'User4'};
  }

  @Get('/users/:id')
  getOne(@Param('id') id: number) {    
    return {name: 'User1'+id};
  }

  @Post('/users')
  post(@Body() user: any) {
    return {name: 'User1'};
  }
}