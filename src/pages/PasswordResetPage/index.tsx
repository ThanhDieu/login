import { MainLayout } from 'lib';
import withHelmet from 'lib/components/layout/WithHelmet';
import { ForgetPasswordStepsLayout } from './partials';



const Page: React.FC = () => {
  return (
    <MainLayout>
      <ForgetPasswordStepsLayout />
    </MainLayout>
  );
};

export default withHelmet({ title: 'TM - Password Reset' }, Page);
