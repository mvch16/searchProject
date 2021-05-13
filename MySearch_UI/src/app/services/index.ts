import { CommonService } from './common.services';

export class ServiceLoader {
  public static GetServices() {
    return [CommonService];
  }
}
