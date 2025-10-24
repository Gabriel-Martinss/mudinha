import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'plants',
        loadChildren: () => import('../plants/plants.module').then(m => m.PlantsPageModule)
      },
      {
        path: 'care',
        loadChildren: () => import('../care/care.module').then(m => m.CarePageModule)
      },
      {
        path: 'marketplace',
        loadChildren: () => import('../marketplace/marketplace.module').then(m => m.MarketplacePageModule)
      },
      {
        path: 'personal-info',
        loadChildren: () => import('../personal-info/personal-info.module').then(m => m.PersonalInfoPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
