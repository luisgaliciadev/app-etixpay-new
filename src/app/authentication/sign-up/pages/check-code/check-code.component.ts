import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { VerifyType } from '../../../../shared/models/verifyCode/verifyCode.model';

@Component({
  selector: 'app-check-code',
  templateUrl: './check-code.component.html',
  styleUrls: ['./check-code.component.scss'],
})
export class CheckCodeComponent implements OnInit {
  verifyType: VerifyType = {} as VerifyType;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['type'] === 'email') this.verifyType = VerifyType.Email;
      if (params['type'] === 'phone') this.verifyType = VerifyType.Phone;
    });
  }
}
