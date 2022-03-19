export const Text = ({ as, children }: any) => {
  const Component = as || 'span'
  return <Component>{children}</Component>
}

/**
 * <Text>Hello, world!</Text>
 */
