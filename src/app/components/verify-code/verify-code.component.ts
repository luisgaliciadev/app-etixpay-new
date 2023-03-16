import { Component, Input, OnInit } from '@angular/core';
import { VerifyType } from '../../shared/models/verifyCode/verifyCode.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.scss'],
})
export class VerifyCodeComponent implements OnInit {
  @Input() verifyType: VerifyType = {} as VerifyType;
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.verifyType);
  }

  onTimerFinished(ev: any) {
    if (ev.action === 'done') console.log('termino', ev);
  }

  goTo() {
    if (this.verifyType === 'email')
      this.router.navigate(['/sign-up/set-personal-info']);
    if (this.verifyType === 'phone')
      this.router.navigate(['/sign-up/set-credentials']);
  }
}
