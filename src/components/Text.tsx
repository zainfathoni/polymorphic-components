import React from 'react'

type TextProps<T extends React.ElementType> = {
  children: React.ReactNode
  as?: T
} & React.ComponentPropsWithoutRef<T>

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
export const Text = <T extends React.ElementType = 'span'>({ as, children, ...props }: TextProps<T>) => {
  const Component = as || 'span'
  return <Component {...props}>{children}</Component>
}
