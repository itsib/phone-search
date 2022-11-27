import { BaseHttpController, controller, httpGet } from 'inversify-express-utils';

@controller('/auth')
export class AuthController extends BaseHttpController {

  constructor() {
    super();
  }

  @httpGet('/')
  async getBlockNumber(): Promise<{ test: string }> {
    return { test: 'ASD' };
  }
}
