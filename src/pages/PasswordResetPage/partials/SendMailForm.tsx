import { Button, Form, Input, Typography, message } from "antd";
import { FC } from "react";
import useLoginStore from "store";
import { IResetPasswordFormProps } from "types";
import { STEPS } from "./ForgetPasswordStepsLayout";

interface ISendMailFormProps {
    setStep: (value: number) => void
}

const SendMailForm: FC<ISendMailFormProps> = ({ setStep }) => {
    const [formRequest] = Form.useForm();
    const tenant = useLoginStore(state => state.tenant)
    const isLoading = useLoginStore(state => state.loading)
    const resetPassword = useLoginStore(state => state.resetPassword)
    const handleResetPasswordRequest = async (value: IResetPasswordFormProps) => {
        if (tenant) {
            const payload = {
                ...value,
                tenant_name: tenant?.tenant_name,
            }
            const res = await resetPassword(payload)
            if (res?.success) {
                setStep(STEPS.EMAIL)
            }
        } else {
            message.error('Something went wrong')
        }
    }

    return <Form
        layout="vertical"
        className="login-form flex flex-col"
        form={formRequest}
        onFinish={handleResetPasswordRequest}
    >
        <div className="login-form flex flex-col">
            <Form.Item
                name="email"
                label={<Typography.Text type="secondary">Email</Typography.Text>}

                rules={[
                    {
                        required: true,
                        message: 'Email is required!'
                    },
                    {
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                        message: 'Email invalid'
                    }
                ]}
            >
                <Input placeholder="Enter email" className="py-3" />
            </Form.Item>
            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="min-h-[3rem] w-full"
                    disabled={isLoading}
                >
                    Proceed
                </Button>
            </Form.Item>

        </div>
    </Form>
}

export default SendMailForm