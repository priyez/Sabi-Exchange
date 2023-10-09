import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CurrencyConversionService {
  private apiUrl = 'https://api.exchangerate-api.com/v4/latest/';

  constructor(private http: HttpClient) { }

  getExchangeRate(baseCurrency: string, targetCurrency: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${baseCurrency}`).pipe( 
      map((response: any) => response.rates[targetCurrency])
    );
  }
}
