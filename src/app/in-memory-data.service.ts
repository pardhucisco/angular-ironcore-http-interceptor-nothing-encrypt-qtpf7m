import { InMemoryDbService } from "angular-in-memory-web-api";

/**
 * The InMemoryDataService mocks a simple REST API. The service is discussed
 * in the Angular tour of heroes getting started tutorial
 */
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const quotes = [
      { id: 1, message: 'three can keep a secret, if two of them are dead', author: 'Benjamin Franklin'}
    ];
    const orders = [
    ];
    return { quotes, orders };
  }
}
