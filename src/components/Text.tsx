import React from 'react'

type Rainbow = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'indigo' | 'violet'

type AsProps<T> = {
  as?: T
}
type TextProps<T extends React.ElementType> = AsProps<T> & {
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
 * - ~The component should be reusable with its own props~
 * - Create a reusable utility for Polymorphic types
 * - The component should support refs
 */
export const Text = <T extends React.ElementType = 'span'>({ as, color, children, ...props }: Props<T>) => {
  const Component = as || 'span'
  const inlineStyle = color ? { style: { color } } : {}
  return (
    <Component {...inlineStyle} {...props}>
      {children}
    </Component>
  )
}

// PolymorphicComponentProps<T, P>
