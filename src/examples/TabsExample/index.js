import { Tabs } from 'components';

const tabs = [
  {
    label: 'Account',
    children: <div>Account info and data and whatever</div>
  },
  {
    label: 'Settings',
    children: <div>Seeeettttttitnnngs</div>
  },
  {
    label: 'Subscription',
    children: <div>Subscription detahls</div>
  },  
]

const TabsExample = () => {

  return (
    <div>
      <Tabs 
        tabs={tabs}
        defaultActiveIdx={1}
      />
    </div>
  )
}

export default TabsExample;