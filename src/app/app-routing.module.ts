import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataPrivacyComponent } from './data-privacy/data-privacy.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { StartPageComponent } from './start-page/start-page.component';

const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'legal-notice', component: LegalNoticeComponent },
  { path: 'data-privacy', component: DataPrivacyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
