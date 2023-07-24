// hooks
import useFocusData from './hooks/useFocusData';
import useHoverData from './hooks/useHoverData';
import useKeyPressData from './hooks/useKeyPressData';

// components
import rowData from './components/rowData';
import colData from './components/colData';
import gridData from './components/gridData';
import headingData from './components/headingData';

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
    heading: headingData
  }
}

export default MAP;