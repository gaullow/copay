import { Component } from '@angular/core';
import { Logger } from '../../../providers/logger/logger';

// providers
import { ConfigProvider } from '../../../providers/config/config';

@Component({
  selector: 'page-advanced',
  templateUrl: 'advanced.html'
})
export class AdvancedPage {
  public spendUnconfirmed: boolean;
  public useLegacyAddress: boolean;

  constructor(private configProvider: ConfigProvider, private logger: Logger) {}

  ionViewDidLoad() {
    this.logger.info('Loaded: AdvancedPage');
  }

  ionViewWillEnter() {
    let config = this.configProvider.get();

    this.spendUnconfirmed = config.wallet.spendUnconfirmed;
    this.useLegacyAddress = config.wallet.useLegacyAddress;
  }

  public spendUnconfirmedChange(): void {
    let opts = {
      wallet: {
        spendUnconfirmed: this.spendUnconfirmed
      }
    };
    this.configProvider.set(opts);
  }

  public useLegacyAddressChange(): void {
    let opts = {
      wallet: {
        useLegacyAddress: this.useLegacyAddress
      }
    };
    this.configProvider.set(opts);
  }
}
