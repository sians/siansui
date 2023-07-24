import PropTable from './PropTable';
import HookReturnsTable from './HookReturnsTable';

const MAP = {
  props: (data) => <PropTable data={data}/>,
  hookReturns: (data) => <HookReturnsTable data={data}/>
}

const Tables = ({ tableType, data }) => {
  return MAP[tableType] && MAP[tableType](data)
}

export default Tables;