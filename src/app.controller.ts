import { Controller, Get,Header} from '@nestjs/common';
import { AppService } from './app.service';

@Controller("app")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header("Content-type",'text/html')
  getHello():object {
    return {"name":"Hashir"}
  }
}
