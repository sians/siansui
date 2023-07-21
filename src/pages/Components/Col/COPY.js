const COPY = {
  description: "",
  whenToUse: "",
  code: `
const Col = styled.div(props => {
  const { size, padding, theme, justify, align, overflow, maxHeight } = props;
  const colPadding = padding || 0;
  const widthPercentage = size / 12 * 100;
  return {
    display: 'flex',
    flexDirection: 'column',
    padding: colPadding,
    width: \`calc(\${widthPercentage}% - \${colPadding * 2}px)\`,
    flexWrap: 'wrap',
    justifyContent: justify,
    alignItems: align,
    transition: 'width 0.5s',
    overflow: overflow && overflow,
    maxHeight: maxHeight && maxHeight
  }
})

  `,
}

export default COPY;