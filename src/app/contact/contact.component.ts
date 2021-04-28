import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ContactSuccessComponent } from '../contact-success/contact-success.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private http: HttpClient, public dialog: MatDialog) { }

  endpoint: string;
  submitReport: string;
  submitComplete = false;

  ngOnInit(): void {
    this.endpoint = "http://oliver-maender.developerakademie.com/olivermaender/send_mail.php";
  }

  // sendMail() {
  //   alert("Deine Nachricht wurde verschickt!");
  // }

  onSubmit(myForm: NgForm) {

    console.log("VALUE", myForm.value);
    console.log("VALID", myForm.valid);

    if (myForm.valid) {
      this.http.post(this.endpoint, myForm.value)
        .subscribe(
          (response) => {
            console.log(response);
            this.submitReport = "Thank you for your message. I will reply as soon as possible!";
            this.submitComplete = true;
            // alert(this.submitReport);
            // myForm.reset();
            myForm.resetForm();
            this.openConfirmation();
          },
          (error) => {
            console.error(error);
            this.submitReport = "An error occured while sending your message! You can contact me directly via e-mail: oliver.maender@gmail.com";
            this.submitComplete = true;
            this.openConfirmation();
            // alert(this.submitReport);
          }
        );
    }

  }

  openConfirmation(): void {
    this.dialog.open(ContactSuccessComponent, {
      data: {
        "submitReport": this.submitReport
      }
    });
  }

}
