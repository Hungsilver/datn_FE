import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from './product.module';
import { BaseRequestService } from '../../../../libs/service/request/base-request.service';
import { IReqApi } from 'src/libs/common/interface/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(
    private http: HttpClient,
    private baseRequestService: BaseRequestService
  ) {
  }

  getProducts(params?: any): Promise<IReqApi<IProduct[]>> {
    return new Promise<IReqApi<IProduct[]>>((resolve, reject) => {
      this.baseRequestService.get('product/filter', params).subscribe(
        (result) => {
          return resolve(result);
        },
        (err) => reject(err)
      );
    });
  }

  getProductById(id: Number): Promise<IProduct> {
    return new Promise<IProduct>((resolve, reject) => {
      this.baseRequestService.get(`product/${id}`).subscribe(
        (result) => {
          return resolve(result);
        },
        (err) => reject(err)
      );
    });
  }



  filter(params: any): Promise<IReqApi<IProduct[]>> {
    return new Promise<IReqApi<IProduct[]>>((resolve, reject) => {
      this.baseRequestService.get(`product/filter`, params).subscribe(
        (res) => {
          return resolve(res);
        },
        (err) => reject(err)
      )
    })
  }
}
