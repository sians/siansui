import { useState } from 'react';
import { Alert } from 'components';

const data = [
  {
    id: 1,
    title: "This is an error alert",
    description: "Zomg something bad is happening",
    variant: 'solid',
    alertType: 'error',
    displayTimeout: 5000
  },
  {
    id: 2,
    title: "Alert with only a title",
    variant: 'light',
    alertType: 'error',
    hasClose: true
  },  
  {
    id: 3,
    description: "Alert with only a description",
    variant: 'light',
    alertType: 'error',
    hasIcon: false,
  },    
]

const AlertExample = () => {
  const [alerts, setAlerts] = useState(data);
  const closeAlert = (id) => {
    const newAlerts = alerts.filter(e => e.id !== id);
    setAlerts(newAlerts);
  }

  return alerts.map((alert, idx) =>
    <div key={`alertex-${idx}`}>
      <Alert 
        id={alert.id}
        title={alert.title}
        description={alert.description}
        variant={alert.variant}
        alertType={alert.alertType}
        hasClose={alert.hasClose}
        hasIcon={alert.hasIcon}
        displayTimeout={alert.displayTimeout}
        onClose={closeAlert}
      />
      <br/>
    </div>
  )
}

export default AlertExample;