import React from 'react'

export const Text = <T extends React.ElementType>({ as, children }: { children: React.ReactNode; as?: T }) => {
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
