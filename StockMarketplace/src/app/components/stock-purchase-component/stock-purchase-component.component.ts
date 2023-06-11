import { Component } from '@angular/core';

@Component({
  selector: 'app-stock-purchase-component',
  templateUrl: './stock-purchase-component.component.html',
  styleUrls: ['./stock-purchase-component.component.scss']
})
export class StockPurchaseComponentComponent {
  stockSymbol: string = '';
  quantity: number = 0;
  price: number = 0;
 

  calculatePrice(): number {
    const price = this.quantity * 4.982;
    return Number(price.toFixed(2));
  }

  
  purchaseStock() {
    // Logika zakupu akcji
    console.log('Zakup akcji:', this.stockSymbol, 'Ilość:', this.quantity, 'Cena:', this.price);
  }
}
