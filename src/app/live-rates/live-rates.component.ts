import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-live-rates',
  templateUrl: './live-rates.component.html',
  styleUrls: ['./live-rates.component.scss']
})
export class LiveRatesComponent implements OnInit {
  exchangeRatesOne: any = {}; // To store the exchange rate data from 0 -6 
  exchangeRatesTwo: any = {}; // To store the exchange rate data from 7 - 12
  exchangeRatesThree: any = {}; // To store the exchange rate data from 13 - 18
  exchangeRatesFour: any = {}; // To store the exchange rate data from 19 - 24
  exchangeRatesFive: any = {}; // To store the exchange rate data from 25 -30
  exchangeRatesSix: any = {}; // To store the exchange rate data from 31 -36
  exchangeRatesSeven: any = {}; // To store the exchange rate data from 37 -42
  constructor(private http: HttpClient) { }

  ngOnInit() {
  this.fetchLiveRates();
  }

  fetchLiveRates() {
    // API endpoint for live exchange rates
    const apiUrl = 'https://api.exchangerate-api.com/v4/latest/USD';
  
    this.http.get(apiUrl).subscribe((data: any) => {
      // Store the exchange rate data in the exchangeRates property
      const rates = data.rates;
      console.log(rates)
      this.exchangeRatesOne = Object.keys(rates).map(currency => ({
        code: currency,
        rate: rates[currency]
      })).slice(0, 6); 
      this.exchangeRatesTwo = Object.keys(rates).map(currency => ({
        code: currency,
        rate: rates[currency]
      })).slice(7, 12); 
      this.exchangeRatesThree = Object.keys(rates).map(currency => ({
        code: currency,
        rate: rates[currency]
      })).slice(13, 18); 
      this.exchangeRatesFour = Object.keys(rates).map(currency => ({
        code: currency,
        rate: rates[currency]
      })).slice(19, 24); 
      this.exchangeRatesFive = Object.keys(rates).map(currency => ({
        code: currency,
        rate: rates[currency]
      })).slice(25, 30); 
      this.exchangeRatesSix = Object.keys(rates).map(currency => ({
        code: currency,
        rate: rates[currency]
      })).slice(31, 36); 
      this.exchangeRatesSeven = Object.keys(rates).map(currency => ({
        code: currency,
        rate: rates[currency]
      })).slice(37, 42); 


    });
  }
  
}

