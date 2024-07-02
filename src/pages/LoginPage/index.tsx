import { Typography } from 'antd';
import { MainLayout } from 'lib';
import withHelmet from 'lib/components/layout/WithHelmet';
import LoginForm from './FormLogin';

const LoginPage: React.FC = () => {

    return <MainLayout>
        <>
            <div className='text-center'>
                <Typography.Title level={2} className="m-0">
                    Welcome back
                </Typography.Title>
                <Typography.Text type="secondary">
                    Signin
                </Typography.Text>
            </div>
            <LoginForm />
        </>
    </MainLayout>
};

export default withHelmet({ title: 'TM - Login' }, LoginPage);
