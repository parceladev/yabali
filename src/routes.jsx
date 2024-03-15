import { SignInPage, SignUpPage } from './pages/auth';

import {
  HomePage,
  ProfilePage,
  DetailDonationPage,
  DonationPage,
  InformationPage,
  ProgramPage,
} from './pages/user';

export const routes = [
  {
    title: 'User Pages',
    layout: 'UserLayout',
    pages: [
      {
        name: 'Home Page',
        path: '/',
        element: <HomePage />,
      },
      {
        name: 'Home Page',
        path: '/home',
        element: <HomePage />,
      },
      {
        name: 'Profil Page',
        path: '/profil',
        element: <ProfilePage />,
      },
      {
        name: 'Program Page',
        path: '/program',
        element: <ProgramPage />,
      },
      {
        name: 'Information Page',
        path: '/informasi',
        element: <InformationPage />,
      },
      {
        name: 'Donation Page',
        path: '/donasi',
        element: <DonationPage />,
      },
      {
        name: 'Detail Donation Page',
        path: '/donasi/detail-donasi',
        element: <DetailDonationPage />,
      },
    ],
  },
  {
    title: 'Auth Pages',
    layout: 'AuthLayout',
    pages: [
      {
        name: 'Sign In',
        path: '/sign-in',
        element: <SignInPage />,
      },
      {
        name: 'Sign Up',
        path: '/sign-up',
        element: <SignUpPage />,
      },
    ],
  },
];

export default routes;
