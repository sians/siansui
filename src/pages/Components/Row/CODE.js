const CODE = `
  const Row = styled.div(props => {
    const { padding, theme, align, justify, height, overflowY } = props;
    const rowPadding = padding || 0;
    return {
      display: 'flex',
      flexDirection: 'row',
      padding: rowPadding,
      width: \`calc(100% - \${rowPadding * 2}px)\`,
      alignItems: align,
      justifyContent: justify,
      height: height,
      overflowY: overflowY,
      flexWrap: 'wrap'
    }
  })
`

export default CODE;