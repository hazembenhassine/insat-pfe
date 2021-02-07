import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'soutenances',
    loadChildren: () => import('./pages/soutenances/soutenances.module').then(m => m.SoutenancesModule)
  },
  { path: 'sessions', loadChildren: () => import('./pages/sessions/sessions.module').then(m => m.SessionsModule) },
  { path: 'requests', loadChildren: () => import('./pages/requests/requests.module').then(m => m.RequestsModule) },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
