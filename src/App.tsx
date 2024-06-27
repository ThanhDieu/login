import { router } from 'config';
import { ConfigProvider, MobileDetectorProvider, TenantProvider } from 'lib';
import { LoadingPage } from 'pages';
import { Suspense } from 'react';
import {
  RouterProvider
} from "react-router-dom";

const App: React.FC = () => {

  return (
    <TenantProvider>
      <ConfigProvider>
        <MobileDetectorProvider>
          <Suspense fallback={<LoadingPage />}>
            <RouterProvider router={router} />
          </Suspense>
        </MobileDetectorProvider>
      </ConfigProvider>
    </TenantProvider>
  );
};

export default App;
