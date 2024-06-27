import { Button, Result } from 'antd';
import { ResultStatusType } from 'antd/es/result';
import { useNavigate } from 'react-router-dom';

export interface ErrorPageProps {
  status: ResultStatusType;
  title: string;
  subTitle: string;
}

const ErrorPage: React.FC<ErrorPageProps> = (props) => {
  const { title, subTitle, status } = props;
  const navigate = useNavigate();
  return (
    <Result
      status={status}
      title={title}
      subTitle={subTitle}
      extra={<Button type="primary" onClick={() => navigate('/')} >Go back to Login page</Button>}
    />
  );
};

export default ErrorPage;
