import { Accordion, Typography } from 'components';

const accordion = [
  {
    id: 1,
    label: 'Account',
    children: <div>Account info and data and whatever</div>,
    openOnInit: true
  },
  {
    id: 2,
    label: 'Settings',
    children: <div>
      <Typography.Body>Seeeettttttitnnngs</Typography.Body>
      <Typography.Body>Seeeettttttitnnngs</Typography.Body>
      <Typography.Body>Seeeettttttitnnngs</Typography.Body>
      <Typography.Body>Seeeettttttitnnngs</Typography.Body>
      <Typography.Body>Seeeettttttitnnngs</Typography.Body>
      <Typography.Body>Seeeettttttitnnngs</Typography.Body>
    </div>,
    openOnInit: true    
  },
  {
    id: 3,
    label: 'Subscription',
    children: <div>Subscription detahls</div>
  },  
]

const AccordionExample = () => {

  return (
    <div>
      <Accordion 
        data={accordion}
      />
    </div>
  )
}

export default AccordionExample;