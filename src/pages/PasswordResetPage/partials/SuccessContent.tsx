import { CheckCircleOutlined } from '@ant-design/icons';
import { Typography } from "antd";
import { paths } from 'config';
import { useNavigate } from "react-router-dom";


interface IProps {
  title: string;
  subtitle: string;
  postscript?: string;
}

const SuccessContent = ({ title, subtitle, postscript }: IProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center gap-5">
      <CheckCircleOutlined style={{ fontSize: 56, color: "#22A77A" }} />
      <Typography.Text className="text-xl text-center font-semibold">
        {title}
      </Typography.Text>
      <Typography.Text type="secondary">
        {subtitle}
      </Typography.Text>

      <Typography.Text type="secondary">
        {postscript}
      </Typography.Text>

      <Typography.Link
        className="hover:cursor-pointer text-center"
        onClick={() => { navigate(paths.login) }}>
        Go back to Login page
      </Typography.Link>

    </div>
  )
}

export default SuccessContent;

