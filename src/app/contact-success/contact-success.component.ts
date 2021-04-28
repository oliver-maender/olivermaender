import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-success',
  templateUrl: './contact-success.component.html',
  styleUrls: ['./contact-success.component.scss']
})
export class ContactSuccessComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ContactSuccessComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  submitReport = this.data["submitReport"];

  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
