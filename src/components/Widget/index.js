import Text from './Text';
import Table from './Table';
import Code from './Code';
import List from './List';

const MAP = {
  text: (widget, parentId) => <Text widget={widget} parentId={parentId}/>,
  table: (widget) => <Table widget={widget}/>,
  code: (widget) => <Code widget={widget}/>,
  list: (widget, parentId) => <List widget={widget} parentId={parentId}/>,
}

const Widget = ({ widgetIdx, widget }) => {
  const { widgetType, data } = widget;

  return data && widgetType && (
    <>
      {MAP[widgetType] && MAP[widgetType](
        widget,
        widgetIdx
      )}
    </>
  )
}

export default Widget;