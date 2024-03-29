import { NgModule } from '@angular/core';
import { DetailComponent } from './detail/page/detail.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/page/order.component';
import { ProductComponent } from './product/page/product-home/product.component';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BadgeModule } from 'primeng/badge';
import { DropdownModule } from 'primeng/dropdown';
import { SliderModule } from 'primeng/slider';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CartComponent } from './cart/page/cart.component';
import { TableModule } from 'primeng/table';
import { CheckoutComponent } from './checkout/page/checkout.component';
import { CheckboxModule } from 'primeng/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { BlogHomeComponent } from './blog/bloghome-component';
import { blogdetail } from './blogDetail/blogDetail-component';
import { VoucherHomeComponent } from '../admin/voucher/pages/voucher-home.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';

import { InputTextModule } from 'primeng/inputtext';
import { CarouselModule } from 'primeng/carousel';
import { TabViewModule } from 'primeng/tabview';
import { ChoXacNhanComponent } from './order/component/cho-xac-nhan/cho-xac-nhan.component';
import { ChoLayHangComponent } from './order/component/cho-lay-hang/cho-lay-hang.component';
import { DangGiaoHangComponent } from './order/component/dang-giao-hang/dang-giao-hang.component';
import { DaGiaoHangComponent } from './order/component/da-giao-hang/da-giao-hang.component';
import { DaHuyComponent } from './order/component/da-huy/da-huy.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { DialogComponent } from './order/component/dialog/dialog.component';
import { ChinhSachComponent } from './chinh-sach/chinh-sach.component';
import { VoucherComponent } from './voucher/voucher.component';
import { TraHangComponent } from './order/component/tra-hang/tra-hang.component';
import { TraHangPageComponent } from './order/component/tra-hang-page/tra-hang-page.component';
import { ProfileComponent } from './profile/profile.component';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { VndPipe } from 'src/libs/common/pipe/changeVND.pipe';
// import { DialogComponent } from './order/component/dialog/dialog.component';
import { CalendarModule } from 'primeng/calendar';
import { VndPipePage } from 'src/libs/common/pipe/changeVNDPage.pipe';





@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        BadgeModule,
        DropdownModule,
        SliderModule,
        BreadcrumbModule,
        TableModule,
        CheckboxModule,
        MatDialogModule,
        MatIconModule,
        MatButtonModule,
        MatSlideToggleModule,
        MatSelectModule,
        MatGridListModule,
        MatTableModule,
        MatTabsModule,
        InputTextModule,
        CarouselModule,
        TabViewModule,
        MatDatepickerModule,
        MatFormFieldModule,
        CalendarModule
        // MatInputModule
    ],
    exports: [],
    declarations: [
        DetailComponent,
        HomeComponent,
        OrderComponent,
        ProductComponent,
        CartComponent,
        CheckoutComponent,
        BlogHomeComponent,
        blogdetail,
        ChinhSachComponent,
        VoucherComponent,
        VndPipePage,

        ChoXacNhanComponent,
        ChoLayHangComponent,
        DangGiaoHangComponent,
        DaGiaoHangComponent,
        DaHuyComponent,
        TraHangComponent,
        TraHangPageComponent,
        DialogComponent,
        ProfileComponent,
    ],
})
export class PageLazyModule { }
