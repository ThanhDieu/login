import { Typography } from "antd";
import { paths } from "config";
import { FC, ReactElement, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getQueryParams } from "utils/params";
import { ForgetPasswordForm } from ".";
import SendMailForm from "./SendMailForm";
import SuccessContent from "./SuccessContent";


export enum STEPS {
  REQUEST = 0,
  EMAIL = 1,
  RESET = 2,
  SUCCESS = 3,
}

const ForgetPasswordStepsLayout = () => {
  const location = useLocation();
  const [userNewPassword, setUserNewPassword] = useState<{
    [key: string]: string;
  }>();
  const [step, setStep] = useState<number>(STEPS.REQUEST);

  useEffect(() => {
    const queryParams = getQueryParams()
    if (queryParams?.token) {
      setStep(STEPS.RESET)
      setUserNewPassword(queryParams);
    }
  }, [location.search]);


  const formContent = () => {
    if (step === STEPS.EMAIL) {
      return (
        <SuccessContent
          title='A link has been sent to your email.'
          subtitle='Please check your inbox.'
          postscript='Contact for support if you haven&apos;t received any email.'
        />
      )
    }

    if (step === STEPS.RESET) {
      return <FormLayout>
        <ForgetPasswordForm info={userNewPassword} setStep={setStep} />
      </FormLayout>

    }

    if (step === STEPS.SUCCESS) {
      return (
        <SuccessContent
          title='Successful'
          subtitle='Password updated successfully!'
        />
      )
    }

    return <FormLayout>
      <SendMailForm setStep={setStep} />
    </FormLayout>
  }

  return formContent()

}

export default ForgetPasswordStepsLayout;


interface FormLayoutProps {
  children: ReactElement,

}
const FormLayout: FC<FormLayoutProps> = ({
  children
}) => {
  const navigate = useNavigate();
  return <>
    <div className='text-center'>
      <Typography.Title level={2} className="m-0">
        Welcome back
      </Typography.Title>
      <Typography.Text type="secondary">
        Reset Password
      </Typography.Text>
    </div>
    <div>
      {children}
      <Typography.Link
        className="hover:cursor-pointer text-center w-full inline-block"
        onClick={() => { navigate(paths.login) }}>
        Go back to Login page
      </Typography.Link>
    </div>
  </>
}