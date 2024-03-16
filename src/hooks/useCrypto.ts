import { CryptoService } from '../services';

export interface CryptoOption {
  minutes?: number;
  symbol: 'bitcoin' | 'ethereum' | 'dogecoin';
}

export function useCrypto() {
  async function browse(options: CryptoOption) {
    try {
      const res = CryptoService.browse(options);
      if (!res) return;
      return res;
    } catch (error) {
      console.log(error);
    }
  }

  return {
    browse,
  };
}
