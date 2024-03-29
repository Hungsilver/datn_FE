import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { StaffService } from '../../service/staff.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-staff-dialog',
  templateUrl: './staff-dialog.component.html',
  styleUrls: ['./staff-dialog.component.scss'],
})
export class StaffDialogComponent implements OnInit {
  staff: any = {};
  // position: any[] = [];
  type: any;
  uploadedUrl: string | null = null;

staffFrom :FormGroup = new FormGroup({});


  ngOnInit(): void {

    this.staffFrom = this.fb.group({
      hoTen: ['', [Validators.required,Validators.pattern(/^[\p{L}]+([\s.'-][\p{L}]+)*$/u)]],
      email : ['', [Validators.required,Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]],
      matKhau: ['', [Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/),Validators.minLength(8)]],
      soDienThoai: ['',[Validators.required,Validators.pattern(/^(0[1-9])+([0-9]{8})$/)]],
      gioiTinh:  [true, Validators.required],
      ngaySinh:  ['', Validators.required],
      diaChi: ['', Validators.required],
      // chucVu:  [null, Validators.required],
      trangThai: [1, Validators.required],
      // anhDaiDien :[null, Validators.required],
  });

  if(this.data.staff && this.data.staff.hoTen && this.data.staff.email && this.data.staff.matKhau
    &&  this.data.staff.soDienThoai && this.data.staff.gioiTinh && this.data.staff.ngaySinh
    && this.data.staff.diaChi
    ){
      this.uploadedUrl = this.data.staff.anhDaiDien;
      this.staffFrom.patchValue({
        hoTen :this.data.staff.hoTen,
        email :this.data.staff.email,
        matKhau :this.data.staff.matKhau,
        soDienThoai: this.data.staff.soDienThoai,
        gioiTinh :this.data.staff.gioiTinh,
        ngaySinh:this.data.staff.ngaySinh,
        diaChi : this.data.staff.diaChi,
        trangThai: this.data.staff.trangThai,
        // chucVu:this.data.staff.chucVu.id,
        // anhDaiDien :this.data.staff.anhDaiDien,
      });
    }

  // this.type =this.data.type;
  // if (this.type === 'update') {
  //     this.uploadedUrl =this.data.staff.anhDaiDien;
  //   this.staffFrom.patchValue(this.data.staff);
  // }


  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private staffService: StaffService,
    private dialog: MatDialog,
    private fireStorage: AngularFireStorage,
    private fb :FormBuilder,
    private notification: ToastrService,
  ) {
    this.type = data.type;
    this.staff = data.staff;


  }

  async onFileChange(event: any) {
    const files = event.target.files;
    console.log('files-log', files);

    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const path = `images/${file.name}`;
        const uploadTask = await this.fireStorage.upload(path, file);
        // const url = await uploadTask.ref.getDownloadURL();
        this.uploadedUrl = await uploadTask.ref.getDownloadURL();

        console.log(`Uploaded file ${i}: ${this.uploadedUrl}`);
      }
    }
  }
  addStaff() {

      const formValue = this.staffFrom.value;
      const emailValue = formValue.email;
      const sdtValue = formValue.soDienThoai;

            this.staff ={
              hoTen: formValue.hoTen,
              email : formValue.email,
              matKhau:formValue.matKhau,
              soDienThoai:formValue.soDienThoai,
             gioiTinh : formValue.gioiTinh,
             ngaySinh :formValue.ngaySinh,
             diaChi:formValue.diaChi,
             trangThai:formValue.trangThai,
             anhDaiDien:formValue.anhDaiDien,
            };
            this.staff.anhDaiDien =this.uploadedUrl;
            if(this.staff.anhDaiDien && this.staff.anhDaiDien.length > 0){

            this.staffService.createStaff(this.staff).then((res) => {
              console.log('data created', res.content);
              if (res) {
                this.notification.success('Đăng ký thành công');
                this.dialog.closeAll();
              }
            }).catch((err) =>{
              if (err === 'Email already exists') {
                this.notification.error('Email đã tồn tại');
              }else if (err === 'Phone number already exists') {
                this.notification.error('Số điện thoại đã tồn tại');
              }else {
                this.notification.error('Lỗi khi thêm nhân viên');
              }
            });
          } else {
              this.notification.error('anh không được để trống');
          }

  }

  updateStaff() {
    const formValue = this.staffFrom.value;
    this.staff ={
      hoTen :formValue.hoTen,
      email :formValue.email,
      matKhau :formValue.matKhau,
      soDienThoai: formValue.soDienThoai,
      gioiTinh :formValue.gioiTinh,
      ngaySinh:formValue.ngaySinh,
      diaChi : formValue.diaChi,
      trangThai: formValue.trangThai,
      // chucVu :formValue.chucVu,
      // anhDaiDien :formValue.anhDaiDien,
    anhDaiDien :this.uploadedUrl,
    }
      // this.staff.anhDaiDien = this.uploadedUrl || this.staff.anhDaiDien;
    this.staffService.updateStaff(this.staff, this.data.staff.id).then((res) => {
      console.log('data updated', res.content);
      if (res) {
        this.dialog.closeAll();
      }
    }).catch(err =>{
      if (err === 'Email already exists') {
        this.notification.error('Email đã tồn tại');
      } else if (err === 'Phone number already exists') {
        this.notification.error('Số điện thoại đã tồn tại');
      } else {
        this.notification.error('Lỗi khi cập nhật nhân viên');
      }
    });
  }

deleteStaff(){
this.staffService.deleteStaff(this.staff.id);
this.dialog.closeAll();
}






}
