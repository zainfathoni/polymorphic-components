export const Text = ({ as, children }: any) => {
  const Component = as || 'span'
  return <Component>{children}</Component>
}

/**
 * <Text as="div">Hello, world!</Text>
 *
 * as can receive invalid element
 * No attributes support
 * Wrong attributes can be passed for a valid element
 *
 * Why is this bad?
 * - Terrible DX
 * - Bugs can (and will) creep in
 */
