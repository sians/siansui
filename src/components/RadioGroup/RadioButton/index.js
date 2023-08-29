import useHover from 'hooks/useHover';
import { Radio } from '../styles';

const RadioButton = ({
  id,
  name,
  label,
  value,
  isSelected
}) => {
  const [hoverRef, isHovered] = useHover();

  return (
    <label for={id}>
      <Radio
        ref={hoverRef}
        type='radio'
        id={id}
        name={name}
        value={value}
        isHovered={isHovered}
        isSelected={isSelected}
      />
      <p>{label}</p>
    </label>
  )
}

export default RadioButton;