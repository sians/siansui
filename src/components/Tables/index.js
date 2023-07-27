import PropTable from './PropTable';
import HookReturnsTable from './HookReturnsTable';
import HeadingsTable from './HeadingsTable';

const MAP = {
  props: (data) => <PropTable data={data}/>,
  hookReturns: (data) => <HookReturnsTable data={data}/>,
  headings: (data) => <HeadingsTable data={data} />
}

const Tables = ({ tableType, data }) => {
  return MAP[tableType] && MAP[tableType](data)
}

export default Tables;