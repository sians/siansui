// hooks
import useFocusData from './hooks/useFocusData';
import useHoverData from './hooks/useHoverData';
import useKeyPressData from './hooks/useKeyPressData';

// components
import rowData from './components/rowData';
import colData from './components/colData';
import gridData from './components/gridData';
import headingData from './components/headingData';
import iconData from './components/iconData';
import bodyData from './components/bodyData';
import smallData from './components/smallData';
import codeData from './components/codeData';
import linkData from './components/linkData';

const MAP = {
  hooks: {
    useFocus: useFocusData,
    useHover: useHoverData,
    useKeyPress: useKeyPressData
  },
  components: {
    row: rowData,
    grid: gridData,
    col: colData,
    heading: headingData,
    icon: iconData,
    body: bodyData,
    small: smallData,
    code: codeData,
    link: linkData
  }
}

export default MAP;