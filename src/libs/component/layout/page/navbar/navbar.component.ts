import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CacheService } from 'src/libs/service/request/cache.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  quantityInCart!: number;
  customerInfo!: any;

  constructor(
    private cacheService: CacheService,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    this.quantityInCart = 10;
    this.customerInfo = this.cacheService?.get('customer') ?? undefined;
  }

  logout() {
    this.customerInfo = null;
    this.cacheService.remove('customer');
    this.router.navigate(['/'])
  }
}
