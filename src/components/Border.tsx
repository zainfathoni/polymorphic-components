import React from 'react'

// TODO: https://github.com/ohansemmanuel/polymorphic-react-component/blob/master/exercise.md
export const Border = ({ children, ...props }: { children: React.ReactElement }) => {
  ;<div {...props}>{children}</div>
}
