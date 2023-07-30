import { Layout } from 'components';

import { Item, Bullet } from './styles';

const List = ({ widget, parentId }) => {
  const { data, listType } = widget;
  
  return listType === 'ul' ? (
    <ul>
      {data && data.map((item, idx) => {
        return item.subtext && 
          <Item key={`w-${parentId}-li-${idx}`}>
            <Layout.Row align='center'>
              <Bullet />
              {item.text}
            </Layout.Row>
            
            <div className='li-subtext'>
              {item.subtext}
              </div>
          </Item>
      })}      
    </ul>
  ) : (
    <ol>
      {data && data.map((item, idx) => {
        return (
          <li key={`w-${parentId}-li-${idx}`}>
            {item}
          </li>
        )
      })}      

    </ol>
  )
}

export default List;