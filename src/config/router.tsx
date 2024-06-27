import { LoginPage, NotFoundPage, PasswordResetPage } from 'pages';
import { createBrowserRouter } from "react-router-dom";
import paths from './paths';

export const router = createBrowserRouter([
  {
    path: paths.login,
    element: <LoginPage />,

  },
  {
    path: paths.resetPassword,
    element: <PasswordResetPage />,

  },
  {
    path: "*",
    element: <NotFoundPage />,

  },
]);