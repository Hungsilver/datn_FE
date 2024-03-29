import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/page/product-detail/product-detail.component';
import { ColorComponent } from './color/pages/color-home/color.component';
import { OriginComponent } from './origin/origin.component';
import { OrderComponent } from '../page/order/page/order.component';
import { DashboardComponent } from './dashboard/page/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { MaterialComponent } from './material/pages/material-home/material.component';
import { MaterialSolesComponent } from './material-soles/pages/material-soles-home/material-soles.component';
import { SizeComponent } from './size/pages/size-home/size.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { BrandComponent } from './brand/pages/brand-home/brand.component';
import { CategoryHomeComponent } from './category/pages/category-home/category-home.component';
import { HomeProductComponent } from './admin-product/pages/home-product/home-product.component';
import { CustomerHomeComponent } from './customer/pages/customer-home/customer-home.component';
import { BlogHomeComponent } from './blog/pages/blog-home/blog-home.component';
import { AddressHomeComponent } from './address/pages/address-home/address-home.component';
import { StaffHomeComponent } from './staff/pages/staff-home/staff-home.component';
import { TestNewComponent } from './test-new/test-new.component';
import { NComponent } from './test-new/n/n.component';
import { SalesComponent } from './sales/sales.component';
import { VoucherHomeComponent } from './voucher/pages/voucher-home.component';
import { PaymentSuccessComponent } from './sales/components/payment-success/payment-success.component';
import { TraHangAdminComponent } from './tra-hang-admin/page/tra-hang-admin.component';
import { InvoiceComponent } from './invoice/pages/invoice.component';
import { InvoiceDetailComponent } from './invoice/pages/invoice-detail/invoice-detail.component';
import { HoaDonComponent } from './hoa-don/page/hoa-don.component';
import { InvoiceChiTietComponent } from './hoa-don/component/invoice-chi-tiet/invoice-chi-tiet.component';



const routes: Routes = [
  { path: '', redirectTo: 'sales', pathMatch: 'full' },
  { path: 'sales', component: SalesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'product', component: ProductDetailComponent },
  { path: 'mau-sac', component: ColorComponent },
  { path: 'xuat-xu', component: OriginComponent },
  { path: 'Order', component: OrderComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'chi-tiet-san-pham', component: ProductDetailComponent },
  { path: 'chat-lieu-giay', component: MaterialComponent },
  { path: 'chat-lieu-de-giay', component: MaterialSolesComponent },
  { path: 'kich-co', component: SizeComponent },
  { path: 'upload-file', component: UploadFileComponent },
  { path: 'thuong-hieu', component: BrandComponent },
  { path: 'danh-muc', component: CategoryHomeComponent },
  { path: 'san-pham', component: HomeProductComponent },
  { path: 'khach-hang', component: CustomerHomeComponent },
  { path: 'gioi-thieu', component: BlogHomeComponent },
  { path: 'dia-chi', component: AddressHomeComponent },
  { path: 'nhan-vien', component: StaffHomeComponent },
  { path: 'test-p', component: TestNewComponent },
  { path: 'test-n', component: NComponent },
  { path: 'phieu-giam-gia', component: VoucherHomeComponent },
  { path: 'payment-success', component: PaymentSuccessComponent },
  { path: 'tra-hang', component: TraHangAdminComponent },
  { path: 'hoa-don2', component: InvoiceComponent },
  { path: 'hoa-don', component: HoaDonComponent },
  { path: 'hoa-don/:id', component: InvoiceChiTietComponent },


  // { path: 'new-coupon', component: CouponComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
