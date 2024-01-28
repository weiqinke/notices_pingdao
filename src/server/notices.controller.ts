import { Body, Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { NoticesService } from './notices.service';

@Controller()
export class NoticesController {
  constructor(private readonly noticesService: NoticesService) {}
  // 如下两个参数都是对应proto文件的内容，两个都可以省略，nestjs会自动转换名字大小写去匹配
  @GrpcMethod('NoticeService', 'GetTemplateNotices')
  async GetTemplateNotices(): Promise<any> {
    const data = await this.noticesService.getTemplateNotices();
    return { code: 200, message: '', data };
  }
  @GrpcMethod('NoticeService', 'UidNotices')
  async UidNotices(payload: any): Promise<any> {
    const data = await this.noticesService.getUidNotices(payload);
    return { code: 200, message: '操作成功', data };
  }

  @GrpcMethod('NoticeService', 'AllPlacard')
  async AllPlacard(@Body() body: any): Promise<any> {
    const data = await this.noticesService.AllPlacard(body);
    return { code: 200, message: '操作成功', data };
  }
}
