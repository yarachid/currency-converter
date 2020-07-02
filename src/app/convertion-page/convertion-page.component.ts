import { Component, OnInit } from '@angular/core';
import {CurrencyExchangeService} from '../services/currency-exchange.service';

@Component({
  selector: 'app-convertion-page',
  templateUrl: './convertion-page.component.html',
  styleUrls: ['./convertion-page.component.css']
})
export class ConvertionPageComponent implements OnInit {

  amount: number= 100;
  from = 'CAD';
  to = 'USD';
  rates: {[key: string]: number};

  constructor(private currencyExchangeService: CurrencyExchangeService) {
    this.loadRates();
  }

  loadRates(){
    this.currencyExchangeService.geRates(this.from)
      .subscribe(r => this.rates = r.rates);
  }

  getAllCurrencies(): string[]{
    return Object.keys(this.rates);
  }

  calculateConversion(): number{
    return this.amount * this.rates[this.to];
  }

  ngOnInit(): void {
  }



}
