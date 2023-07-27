import { Typography, Layout } from 'components';

import { Item, Bullet } from './styles';

const List = ({ widget, parentId }) => {
  const { data, listType } = widget;
  console.log('list', data, listType)
  return listType === 'ul' ? (
    <ul>
      {data && data.map((item, idx) => {
        console.log(item.subtext, 'thhehee e e e e ')
        return item.subtext ? (
          <>
            
            <Item key={`w-${parentId}-li-${idx}`}>
              <Layout.Row align='center'>
                <Bullet />
                {item.text}
              </Layout.Row>
              
              <div className='li-subtext'>{item.subtext}</div>
            </Item>
          </>
        ) : (
          <>
            <Item key={`w-${parentId}-li-${idx}`}>
              <Layout.Row align='center'>
                <Bullet />
                {item}
              </Layout.Row>
            </Item>
          </>
        )
      })}      
    </ul>
  ) : (
    <ol>
      {data && data.map((item, idx) => {
        return <li key={`w-${parentId}-li-${idx}`}>{item}</li>
      })}      

    </ol>
  )
}

export default List;