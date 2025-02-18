import { Body, Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from '../dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    console.log('Logging Request Body');
    console.log({
      email: dto.email,
      NewPassword: dto.password,
    });

    return this.authService.signup();
  }

  @Post('signin')
  signIn() {
    return 'I am sign in';
  }
}
