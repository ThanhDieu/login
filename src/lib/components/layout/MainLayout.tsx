import { Image, Layout, Space, Typography, theme } from "antd";

const { Content } = Layout;
const { useToken } = theme;

export interface IMainLayoutProps {
    children?: React.ReactElement;
}
const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
    const { token } = useToken();
    return <Layout className="h-screen py-8 px-8" style={{ backgroundColor: token.colorBgLayout }}>
        <Content className="flex items-center w-full justify-center">
            <Space direction="vertical" className='gap-8 w-[30%] min-w-[413px]'>
                <div className='text-center'>
                    <Image
                        height={56}
                        src={`/logo/logo-no-background-black.svg`}
                        preview={false}
                    />
                </div>
                <div style={{ backgroundColor: token.colorBgContainer }} className="flex flex-col gap-8 rounded-[10px] px-8 py-6">
                    {children}
                </div>
            </Space>
        </Content>
        <div className="text-center">
            <Typography.Text type='secondary'>
                2024 Taimi, All rights reserved
            </Typography.Text>
        </div>
    </Layout>
}

export default MainLayout