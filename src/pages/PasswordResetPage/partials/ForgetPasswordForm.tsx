import { Button, Form, Input, Typography, message } from "antd";
import { FC } from "react";
import useLoginStore from "store";
import { IResetPasswordWithTokenProps } from "types/models";
import { STEPS } from "./ForgetPasswordStepsLayout";

interface IForgetPasswordFormProps {
  info?: {
    [key: string]: string;
  },
  setStep: (value: number) => void
}

const ForgetPasswordForm: FC<IForgetPasswordFormProps> = ({ info, setStep }) => {
  const tenant = useLoginStore(state => state.tenant)
  const isLoading = useLoginStore(state => state.loading)
  const setNewPassword = useLoginStore(state => state.setNewPassword)
  const [formReset] = Form.useForm();

  const handleResetPassword = async (value: IResetPasswordWithTokenProps) => {
    if (tenant && info) {
      const payload = {
        ...value,
        tenant_name: tenant?.tenant_name,
        token: info?.token

      }
      const res = await setNewPassword(payload)
      if (res?.success) {
        setStep(STEPS.SUCCESS)
      }
    } else {
      message.error('Something went wrong')
    }
  }

  return <Form
    layout="vertical"
    className="login-form flex flex-col"
    form={formReset}
    onFinish={handleResetPassword}
  >
    <div className="login-form flex flex-col">
      <Form.Item
        label={<Typography.Text type="secondary">Username</Typography.Text>}
      >
        <Input
          disabled
          className='py-3'
          value={info?.username}
        />
      </Form.Item>
      <Form.Item
        name="password"
        label={<Typography.Text type="secondary">New Password</Typography.Text>}
        rules={[
          {
            required: true,
          },
          {
            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z].*[A-Z])(?=.*[!@#$%^&*.?\\-]).{10,}$/g,
            message: (
              <Typography.Text italic style={{ fontSize: '12px', color: 'red' }}>
                password: must contain at least a digit, a lowercase character, 2 uppercase
                character, a special character (!@#$%^&*.?-) and 13 characters long!
              </Typography.Text>
            )
          }
        ]}
      >
        <Input.Password type="password" placeholder="New password" className="py-3" />
      </Form.Item>
      <Form.Item
        name="confirmPassword"
        dependencies={['new_password']}
        label={<Typography.Text type="secondary">Confirm password</Typography.Text>}
        rules={[
          {
            required: true,
            message: 'Confirm password is required!'
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Password and Confirm password does not match'));
            }
          })
        ]}
      >
        <Input.Password
          type="password"
          placeholder="Confirm password"
          className="py-3"
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          disabled={isLoading}
          htmlType="submit"
          className="min-h-[3rem] w-full"
        >
          Proceed
        </Button>
      </Form.Item>
    </div>
  </Form>

}

export default ForgetPasswordForm;
