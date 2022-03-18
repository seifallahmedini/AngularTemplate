import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from 'app/core/guards/admin.guard';
import { VendorGuard } from 'app/core/guards/vendor.guard';
import { AuthenticationGuard } from 'app/core/guards/authentication.guard';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AdminGuard]
  },
  {
    path: 'calendar',
    loadChildren: () => import('../../calendar/calendar.module').then(m => m.CalendarsModule),
    canActivate: [AdminGuard]
  },
  {
    path: 'charts',
    loadChildren: () => import('../../charts/charts.module').then(m => m.ChartsNg2Module),
    canActivate: [AdminGuard]
  },
  {
    path: 'forms',
    loadChildren: () => import('../../forms/forms.module').then(m => m.FormModule),
    canActivate: [AdminGuard]
  },
  {
    path: 'maps',
    loadChildren: () => import('../../maps/maps.module').then(m => m.MapsModule),
    canActivate: [AdminGuard]
  },
  {
    path: 'tables',
    loadChildren: () => import('../../tables/tables.module').then(m => m.TablesModule),
    canActivate: [AdminGuard]
  },
  {
    path: 'datatables',
    loadChildren: () => import('../../data-tables/data-tables.module').then(m => m.DataTablesModule),
    canActivate: [AdminGuard]
  },
  {
    path: 'uikit',
    loadChildren: () => import('../../ui-kit/ui-kit.module').then(m => m.UIKitModule),
    canActivate: [AdminGuard]
  },
  {
    path: 'components',
    loadChildren: () => import('../../components/ui-components.module').then(m => m.UIComponentsModule),
    canActivate: [AdminGuard]
  },
  {
    path: 'pages',
    loadChildren: () => import('../../pages/full-pages/full-pages.module').then(m => m.FullPagesModule),
    canActivate: [AdminGuard]
  },
  {
    path: 'cards',
    loadChildren: () => import('../../cards/cards.module').then(m => m.CardsModule),
    canActivate: [AdminGuard]
  },
  {
    path: 'colorpalettes',
    loadChildren: () => import('../../color-palette/color-palette.module').then(m => m.ColorPaletteModule),
    canActivate: [AdminGuard]
  },
  {
    path: 'chat',
    loadChildren: () => import('../../chat/chat.module').then(m => m.ChatModule),
    canActivate: [AdminGuard]
  },
  {
    path: 'chat-ngrx',
    loadChildren: () => import('../../chat-ngrx/chat-ngrx.module').then(m => m.ChatNGRXModule),
    canActivate: [AdminGuard]
  },
  {
    path: 'inbox',
    loadChildren: () => import('../../inbox/inbox.module').then(m => m.InboxModule),
    canActivate: [AdminGuard]
  },
  {
    path: 'taskboard',
    loadChildren: () => import('../../taskboard/taskboard.module').then(m => m.TaskboardModule),
    canActivate: [AdminGuard]
  },
  {
    path: 'taskboard-ngrx',
    loadChildren: () => import('../../taskboard-ngrx/taskboard-ngrx.module').then(m => m.TaskboardNGRXModule),
    canActivate: [AdminGuard]
  },
  {
    path: 'player',
    loadChildren: () => import('../../player/player.module').then(m => m.PlayerModule),
    canActivate: [AdminGuard]
  },
  // New Modules
  {
    path: 'users',
    loadChildren: () => import('../../admin-features/users/users.module').then(m => m.UsersModule),
    canActivate: [AdminGuard]
  },
  {
    path: 'cooperations',
    loadChildren: () => import('../../admin-features/cooperations/cooperations.module').then(m => m.CooperationsModule),
    canActivate: [AdminGuard]
  },
  {
    path: 'backups',
    loadChildren: () => import('../../admin-features/backups/backups.module').then(m => m.BackupsModule),
    canActivate: [AdminGuard]
  },
];
