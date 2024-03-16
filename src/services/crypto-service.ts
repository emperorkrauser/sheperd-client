import axios from 'axios';
import { CryptoOption } from '../hooks';

export class CryptoService {
  public static async browse(options: CryptoOption) {
    const { symbol = 'bitcoin', minutes = 60 } = options;
    try {
      const url = `http://localhost:3001/api/${symbol}?minutes=${minutes}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
