import { sync } from 'glob';
import { Container } from 'inversify';
import { join } from 'path';
import { PhoneService } from '../services';

/**
 * Dynamic import all controllers
 */
const [, ext] = __filename.match(/\.(\w+)$/);
sync(join(__dirname, '../controllers', '**', `*.controller.${ext}`)).forEach((filename: string): void => require(filename));

export async function buildContainer(): Promise<Container> {
  /**
   * Creates container that will contain all dependencies
   */
  const container = new Container({ defaultScope: 'Singleton' });

  container.bind<PhoneService>('TxService').to(PhoneService);

  return container;
}
