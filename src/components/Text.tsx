import React from 'react'

type TextProps<T> = {
  children: React.ReactNode
  as?: T
}

/**
 * <Text as="div">Hello, world!</Text>
 *
 * - ~as can receive invalid element~
 * - No attributes support
 * - Wrong attributes can be passed for a valid element
 *
 * Why is this bad?
 * - Terrible DX
 * - Bugs can (and will) creep in
 */
export const Text = <T extends React.ElementType>({ as, children }: TextProps<T>) => {
  const Component = as || 'span'
  return <Component>{children}</Component>
}
