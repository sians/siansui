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
import badgeData from './components/badgeData';
import switchData from './components/switchData';
import chipData from './components/chipData';
import avatarData from './components/avatarData';
import avatarGroupData from './components/avatarGroupData';
import sliderData from './components/sliderData';
import alertData from './components/alertData';
import inputData from './components/inputData';
import radioGroupData from './components/radioGroupData';
import textareaData from './components/textareaData';
import inputNumberData from './components/inputNumberData';
import checkboxData from './components/checkboxData';
import selectData from './components/selectData';
import formData from './components/formData';

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
    link: linkData,
    badge: badgeData,
    switch: switchData,
    chip: chipData,
    avatar: avatarData,
    avatar_group: avatarGroupData,
    slider: sliderData,
    alert: alertData,
    input: inputData,
    radio: radioGroupData,
    textarea: textareaData,
    input_number: inputNumberData,
    checkbox: checkboxData,
    select: selectData,
    form: formData
  }
}

export default MAP;