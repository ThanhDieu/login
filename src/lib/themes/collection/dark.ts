import { theme } from 'antd';
import { ThemeConfig } from 'antd/es/config-provider/context';

const { darkAlgorithm } = theme;

const colorBg = '#21262D';
const colorBg2 = '#30353D';
const colorBg3 = '#454950';
const colorBgList = '#272B31';
const colorText = '#F6FFFF';
const colorText2 = '#D5DBDB';
const colorText3 = '#859CB0';

const instance: ThemeConfig = {
  algorithm: [darkAlgorithm],
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
      colorBorder: colorBg3
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
