import { CloseCircleOutlined } from '@ant-design/icons';
import { Typography, message, theme } from 'antd';
import { useAppSize } from 'lib';
import { useEffect } from 'react';
import useLoginStore from 'store';

const { useToken } = theme;
interface MobileDetectorProviderProps {
  children?: React.ReactNode;
}

export default function MobileDetectorProvider({ children }: MobileDetectorProviderProps) {
  const { token } = useToken();
  const { innerAppWidth } = useAppSize();
  const messageErr = useLoginStore(state => state.error)

  useEffect(() => {
    if (messageErr) message.error(messageErr)
  }, [messageErr])

  return innerAppWidth <= 450 ? (
    <div
      className="pt-4 pb-6 flex flex-col items-center justify-center"
      style={{ backgroundColor: token.colorBgContainer, height: '100vh' }}
    >
      <CloseCircleOutlined className="mb-4" style={{ fontSize: 60, color: '#ff4d4f' }} />
      <Typography.Title level={4}>Mobile devices are not supported</Typography.Title>
      <Typography.Text>Try again with a larger device</Typography.Text>
    </div>
  ) : (
    <>
      {children}
    </>
  )
}

