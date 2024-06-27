import { theme } from 'antd';
import { ThemeConfig } from 'antd/es/config-provider/context';

const { defaultAlgorithm } = theme;

const colorBg = '#FFFFFE';
const colorBg2 = '#E6EAEE';
const colorBg3 = '#E3E6EA';
const colorBgList = '#f2f4f6';
const colorText = '#00214D';
const colorText2 = '#71849C';
const colorText3 = '#808080';

const instance: ThemeConfig = {
  algorithm: [defaultAlgorithm],
  token: {
    colorBgLayout: colorBg2,
    colorBgBase: colorBg3,
    colorBgContainer: colorBg,
    colorText: colorText,
    colorBgTextHover: colorBgList,
    colorPrimaryText: colorText,
    colorTextDescription: colorText2,
    colorFillSecondary: colorBgList,
    colorBorder: colorBg3
  },
  components: {
    Layout: {
      headerBg: colorBg,
      colorBgBase: colorBg2
      // boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
    },
    Menu: {
      subMenuItemBg: colorBg,
      colorBgContainer: colorBg
    },
    Checkbox: {},
    Table: {
      colorBgContainer: colorBg,
      colorFillAlter: colorBgList,
      colorBorderSecondary: colorBg3
    },
    Input: {
      colorBgContainer: colorBg,
      colorTextPlaceholder: colorText3
    },
    Button: {
      colorBgContainer: colorBg,
      boxShadow: 'none'
    },
    Select: {
      colorBgContainer: colorBg,
      colorBgElevated: colorBg
    },
    DatePicker: {
      colorBgContainer: colorBg
    },
    Drawer: {
      colorBgElevated: colorBg
    },
    Radio: {
      buttonBg: colorBg,
      buttonCheckedBg: colorBg
    },
    Modal: {
      colorBgElevated: colorBg
    },
    Popover: {
      colorBgElevated: colorBg
    },
    Collapse: {
      padding: 0,
      paddingContentHorizontal: 0,
      paddingContentVertical: 0
    }
  }
};

export default instance;
