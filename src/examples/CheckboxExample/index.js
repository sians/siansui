import { useState, useMemo } from 'react';

import TOPICS from './TOPICS';

import { Checkbox, CheckboxGroup, Typography, Link } from 'components';

const CheckboxExample = () => {
  const [terms, setTerms] = useState(true);
  const handleTermsClick = () => setTerms(prev => !prev);

  const [topicState, setTopicState] = useState(TOPICS);
  const topicOptions = useMemo(() => {
    return Object.keys(topicState).map((topic) => {
      return { 
        label: topic, 
        isChecked: topicState[topic],
      }
    })
  }, [topicState])

  const handleTopicClick = (label) => {
    setTopicState(prev => {
      return { 
        ...prev, 
        [label]: !prev[label] 
      }
    })
  }


  const checkboxGroups = [
    {
      legend: "Select topics that you are interested in:",
      name: 'topics',
      onChange: (label) => handleTopicClick(label),
      options: topicOptions,
      colNum: 4,
    }
  ]

  const termsProps = useMemo(() => {
    return {
      id: 'TermsBox',
      name: 'terms',
      isChecked: terms,
      onChange: () => handleTermsClick(),
      label: (
        <p>I accept the <Link text='Terms of Use' variant='small'/> & <Link text='Privacy Policy' variant='small'/></p>
      )
    }
  }, [terms])

  return (
    <div>
      <Typography.Heading size={4}>Checkbox</Typography.Heading>
      <Checkbox {...termsProps}/>

      <Typography.Heading size={4}>CheckboxGroup</Typography.Heading>
      {checkboxGroups.map((groupData, idx) => {
        return (
          <CheckboxGroup 
            key={`chkbx-gr-${idx}`} 
            {...groupData} 
          />
        )
      })}
    </div>
  )
}

export default CheckboxExample;