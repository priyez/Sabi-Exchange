import { Component, OnInit } from '@angular/core';
import { CurrencyConversionService } from '../currency-conversion.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {
  selectedCurrencyOne = 'USD';
  selectedCurrencyTwo = 'EUR';
  amount = 1;
  exchangeRate = 1;
  convertedAmount = 1;
  currencies: string[] = ['USD', 'EUR', 'GBP', 'JPY', 'CAD', 'NGN']; //  available currencies

  constructor(private currencyService: CurrencyConversionService) { }

  ngOnInit() {
    this.calculate();
  }
  

  calculate() {
    this.currencyService.getExchangeRate(this.selectedCurrencyOne, this.selectedCurrencyTwo)
      .subscribe((rate: number) => {
        this.exchangeRate = rate;
        this.convertedAmount = this.amount * this.exchangeRate;
      });
  }

  swapCurrencies() {
    const swapEl = this.selectedCurrencyOne;
    this.selectedCurrencyOne = this.selectedCurrencyTwo;
    this.selectedCurrencyTwo = swapEl;
    this.calculate();
  }
}


