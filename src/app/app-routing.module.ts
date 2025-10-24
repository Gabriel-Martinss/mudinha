import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'plants',
    loadChildren: () => import('./plants/plants.module').then( m => m.PlantsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'marketplace',
    loadChildren: () => import('./marketplace/marketplace.module').then( m => m.MarketplacePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'care',
    loadChildren: () => import('./care/care.module').then( m => m.CarePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'recover',
    loadChildren: () => import('./recover/recover.module').then( m => m.RecoverPageModule)
  },
  {
    path: 'add-plant',
    loadChildren: () => import('./add-plant/add-plant.module').then( m => m.AddPlantPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'personal-info',
    loadChildren: () => import('./personal-info/personal-info.module').then( m => m.PersonalInfoPageModule),
    canActivate: [AuthGuard]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
