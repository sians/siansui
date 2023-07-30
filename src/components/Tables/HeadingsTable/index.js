import GenericTable from '../GenericTable';
import { Cell } from '../styles';

const headers = [
  { title: 'HTML', size: 2 },
  { title: 'Eg.', size: 6 },
  { title: 'Application', size: 4 },
];

const renderRow = (propObj, idx) => (
  <>
    <Cell size={headers[0].size}>
      <strong>{propObj.html}</strong>
    </Cell>

    <Cell size={headers[1].size}>
      {propObj.eg}
    </Cell>

    <Cell size={headers[2].size}>
      {propObj.use}
    </Cell>
  </>
);

const PropTable = ({ data }) => {
  return (
    <GenericTable 
      headers={headers} 
      data={data} 
      renderRow={renderRow}
      tableType='prop'
    />
  );
}

export default PropTable;
