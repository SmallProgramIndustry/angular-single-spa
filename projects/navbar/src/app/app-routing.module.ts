import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component'
import { APP_BASE_HREF } from '@angular/common';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    // component: LoginComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      // {
      //   path: 'projects',
      //   component: ProjectListComponent
      // },
      // {
      //   path: 'projects/:id',
      //   component: ProjectDetailComponent,
      //   resolve: {
      //     project: ProjectResolver
      //   },
      //   children: [
      //     {
      //       path: 'tasks',
      //       component: TasksComponent,
      //       children: [
      //         {
      //           path: ':viewId',
      //           component: ViewComponent
      //         }
      //       ]
      //     }
      //   ]
      // },
      {
        path: 'home',
        component: HomeComponent
      }
    ]
  },
  { path: '**', component: EmptyRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppRoutingModule { }
