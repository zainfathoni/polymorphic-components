import React from 'react'

type Rainbow = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'indigo' | 'violet'

type AsProps<T> = {
  as?: T
}

type PropsToOmit<T extends React.ElementType, ComponentProps> = keyof AsProps<T> & ComponentProps
type PolymorphicComponentProps<T extends React.ElementType, ComponentProps> = React.PropsWithChildren<
  ComponentProps & AsProps<T>
> &
  Omit<React.ComponentPropsWithoutRef<T>, PropsToOmit<T, ComponentProps>>

// TODO: refactor to Pick
type PolymorphicRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>['ref']

type PolymorphicComponentPropsWithRef<T extends React.ElementType, ComponentProps> = PolymorphicComponentProps<
  T,
  ComponentProps
> & { ref?: PolymorphicRef<T> }

type TextProps<T extends React.ElementType> = PolymorphicComponentPropsWithRef<
  T,
  {
    color?: Rainbow | 'white'
  }
>

type TextComponent = <T extends React.ElementType>(props: TextProps<T>) => React.ReactElement | null

/**
 * <Text as="div">Hello, world!</Text>
 *
 * - ~as can receive invalid element~
 * - ~No attributes support~
 * - ~Wrong attributes can be passed for a valid element~
 *
 * Even more requirements
 * - ~The component should be reusable with its own props~
 * - ~Create a reusable utility for Polymorphic types~
 * - ~The component should support refs~
 */
export const Text: TextComponent = React.forwardRef(
  <T extends React.ElementType = 'span'>({ as, color, children, ...props }: TextProps<T>, ref?: PolymorphicRef<T>) => {
    const Component = as || 'span'
    const inlineStyle = color ? { style: { color } } : {}
    return (
      <Component {...inlineStyle} ref={ref} {...props}>
        {children}
      </Component>
    )
  }
)
