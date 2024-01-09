import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthAdminService } from 'src/libs/component/account/serviceAuth/authAdminService.service';
import { CacheService } from 'src/libs/service/request/cache.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarAdminComponent implements OnInit {
  admin: any = undefined;

  constructor(
    private cacheService: CacheService,
    private router: Router,
    private authAdminService: AuthAdminService,

  ) {

  }
  ngOnInit(): void {
    this.admin = this.cacheService.get('admin') ?? undefined;
  }

  logout() {
    this.authAdminService.logoutAdmin();
    this.cacheService.remove('admin');
    this.admin = undefined;
    this.router.navigateByUrl('/')
  }
}
