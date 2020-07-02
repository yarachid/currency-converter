import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyExchangeService {

  constructor(private http: HttpClient) {

  }

  geRates(base: string): Observable<{rates: {[key: string]: number}}>{
    return this.http.get<{rates: {[key: string]: number}}>("https://api.exchangeratesapi.io/latest?base="+base);
  }
}
