import { Tables } from 'components';

const Table = ({ widget }) => {
  const { data, tableType } = widget;
  return data && (
    <Tables tableType={tableType} data={data}/>    
  )
}

export default Table;