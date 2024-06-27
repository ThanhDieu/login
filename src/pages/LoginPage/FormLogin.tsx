import { Button, Form, Input, Typography, message } from "antd";
import { paths } from "config";
import { useNavigate } from "react-router-dom";
import useLoginStore from "store";
import { ILoginFormProps } from "types/models";
import { convertQueryParams } from "utils/params";

const LoginForm = () => {
    const navigate = useNavigate()
    const tenant = useLoginStore(state => state.tenant)
    const login = useLoginStore((state) => state.login)
    const isLoading = useLoginStore((state) => state.loading)

    const handleLogin = async (value: ILoginFormProps) => {
        if (tenant) {
            const payload = {
                ...value,
                tenant_name: tenant?.tenant_name,
                id: tenant?.id
            }
            const res = await login(payload)
            if (res && tenant?.base) {
                const params = convertQueryParams(res);
                const newUrl = `${tenant?.base}?${params}`
                window.location.assign(newUrl)
            }
        } else {
            message.error('Tenant not found')
        }
    };

    return (
        <Form
            layout="vertical"
            name="normal_login"
            className="login-form flex flex-col"
            onFinish={handleLogin}
        >
            <div className="login-form flex flex-col">
                <Form.Item
                    label={<Typography.Text type="secondary">Username</Typography.Text>}
                    className="mb-6"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Username is required!'
                        }
                    ]}
                >
                    <Input
                        placeholder="Enter your username"
                        className="py-3"
                    />
                </Form.Item>
                <Form.Item
                    label={<Typography.Text type="secondary">Password</Typography.Text>}
                    className="mb-6"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Invalid password!'
                        }
                    ]}
                >
                    <Input.Password
                        type="password"
                        placeholder="••••••••••"
                        className="py-3"
                    />
                </Form.Item>
            </div>
            <div className="flex justify-between">

                <Typography.Link
                    className="login-form-forgot hover:cursor-pointer"
                    onClick={() => { navigate(`/${paths.resetPassword}`) }}>
                    Forget your password?
                </Typography.Link>
            </div>
            <Form.Item className="mt-6 mb-0">
                <Button
                    type="primary"
                    htmlType="submit"
                    className="min-h-[3rem] w-full"
                    disabled={isLoading}
                >
                    Sign in
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;
