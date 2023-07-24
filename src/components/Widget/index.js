import Text from './Text';
import Table from './Table';
import Code from './Code';

const MAP = {
  text: (widget, parentId) => <Text widget={widget} parentId={parentId}/>,
  table: (widget) => <Table widget={widget}/>,
  code: (widget) => <Code widget={widget}/>
}

const Widget = ({ widgetIdx, widget }) => {
  const { widgetType, data, title } = widget;

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