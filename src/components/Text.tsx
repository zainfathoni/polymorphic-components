import React from 'react'

type Rainbow = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'indigo' | 'violet'

type TextProps<T extends React.ElementType> = {
  as?: T
  color?: Rainbow | 'white'
}
type Props<T extends React.ElementType> = React.PropsWithChildren<TextProps<T>> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof TextProps<T>>

/**
 * <Text as="div">Hello, world!</Text>
 *
 * - ~as can receive invalid element~
 * - ~No attributes support~
 * - ~Wrong attributes can be passed for a valid element~
 *
 * Even more requirements
 * - The component should be reusable with its own props
 * - Create a reusable
 * - ...
 */
export const Text = <T extends React.ElementType = 'span'>({ as, children, ...props }: Props<T>) => {
  const Component = as || 'span'
  return <Component {...props}>{children}</Component>
}
