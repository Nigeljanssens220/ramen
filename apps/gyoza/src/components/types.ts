import type React from 'react'
import type { ComponentType } from 'react'

type ExtractProps<T> = T extends ComponentType<infer P> ? P : T
type AnyTag = keyof JSX.IntrinsicElements

// Source: https://github.com/emotion-js/emotion/blob/master/packages/styled-base/types/helper.d.ts
// A more precise version of just React.ComponentPropsWithoutRef on its own
type PropsOf<C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>> = JSX.LibraryManagedAttributes<
  C,
  React.ComponentPropsWithoutRef<C>
>

type AsProp<C extends React.ElementType> = {
  /**
   * An override of the default HTML tag.
   * Can also be another React component.
   */
  as?: C
}

/**
 * Allows for extending a set of props (`ExtendedProps`) by an overriding set of props
 * (`OverrideProps`), ensuring that any duplicates are overridden by the overriding
 * set of props.
 */
type ExtendableProps<ExtendedProps = Record<string, never>, OverrideProps = Record<string, never>> = OverrideProps &
  Omit<ExtendedProps, keyof OverrideProps>

/**
 * Allows for inheriting the props from the specified element type so that
 * props like children, className & style work, as well as element-specific
 * attributes like aria roles. The component (`C`) must be passed in.
 */
type InheritableElementProps<C extends React.ElementType, Props = Record<string, never>> = ExtendableProps<
  PropsOf<C>,
  Props
>

/**
 * A more sophisticated version of `InheritableElementProps` where
 * the passed in `AsProp` will determine which props can be included
 */
type PolymorphicComponentProps<C extends React.ElementType, Props = Record<string, never>> = InheritableElementProps<
  C,
  Props & AsProp<C>
>

/**
 * Utility type to extract the `ref` prop from a polymorphic component
 */
type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref']

/**
 * A wrapper of `PolymorphicComponentProps` that also includes the `ref`
 * prop for the polymorphic component
 */
type PolymorphicComponentPropsWithRef<
  C extends React.ElementType,
  Props = Record<string, never>
> = PolymorphicComponentProps<C, Props> & { ref?: PolymorphicRef<C> }

export type {
  AnyTag,
  ExtendableProps,
  ExtractProps,
  InheritableElementProps,
  PolymorphicComponentProps,
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
  PropsOf,
}
