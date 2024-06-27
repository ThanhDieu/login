import { ConfigProvider } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { themes } from 'lib';

export interface XConfigProviderProps {
  children?: React.ReactNode;
}

export interface ThemeProps {
  selected: string;
  colorPrimary: string;
  space?: { size?: number | SizeType };
  direction?: 'ltr' | 'rtl';
  componentSize?: SizeType;
  settings?: any;
  duration?: number;
}

const initialConfigState: ThemeProps = {
  selected: 'default',
  colorPrimary: '#009698',
  space: {
    size: 'middle'
  },
  direction: 'ltr',
  componentSize: 'middle',
  settings: {},

};

const XConfigProvider = (props: XConfigProviderProps) => {
  return <ConfigProvider {...initialConfigState} theme={themes["default"]}>
    {props.children}
  </ConfigProvider>
};

export default XConfigProvider;
