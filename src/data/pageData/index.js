import useFocusData from './hooks/useFocusData'
import useHoverData from './hooks/useHoverData'
import useKeyPressData from './hooks/useKeyPressData'

const MAP = {
  hooks: {
    useFocus: useFocusData,
    useHover: useHoverData,
    useKeyPress: useKeyPressData
  }
}

export default MAP;