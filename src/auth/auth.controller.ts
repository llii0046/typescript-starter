import {
  Controller,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  Body,
  HttpCode,
} from '@nestjs/common/decorators';
import { AuthDto } from './dto';
import {
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
@ApiTags('Auth Module')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('signup')
  @ApiOperation({
    summary: 'Create a user',
  })
  @ApiOkResponse({
    status: HttpStatus.CREATED,
    description:
      'The user has been successfully created.',
  })
  signup(
    @Body()
    dto: AuthDto,
  ) {
    return this.authService.signup(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signin(
    @Body()
    dto: AuthDto,
  ) {
    return this.authService.signin(dto);
  }
}
