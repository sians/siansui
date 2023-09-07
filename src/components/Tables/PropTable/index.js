import GenericTable from '../GenericTable';
import { Cell } from '../styles';
import { TypeString } from 'components';

const headers = [
  { title: 'Property', size: 2.5 },
  { title: 'Description', size: 5.5 },
  { title: 'Type', size: 2 },
  { title: 'Default', size: 2 },
];

const renderRow = (propObj, idx) => (
  <>
    <Cell size={headers[0].size}>
      <strong>{propObj.property}</strong>
    </Cell>

    <Cell size={headers[1].size}>
      {propObj.description}
    </Cell>

    <Cell size={headers[2].size}>
      <TypeString string={propObj.propType} />
    </Cell>
    
    <Cell size={headers[3].size}>{propObj.default}</Cell>
  </>
);

const PropTable = ({ data }) => {
  return (
    <GenericTable 
      headers={headers} 
      data={data} 
      renderRow={renderRow} 
      minWidth={500}
    />
  );
}

export default PropTable;
