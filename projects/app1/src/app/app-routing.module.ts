import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { APP_BASE_HREF } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  {
    path: 'app1',
    // component: LoginComponent,
    children: [
      {
        path: '',
        redirectTo: 'test',
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
        path: 'test',
        component: TestComponent
      },
      {
        path: 'login',
        component: LoginComponent
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
