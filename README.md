# Seraph Design System Style Guide

Seraph UI components library encompasses over 40 high-performance, modular, and responsive UI components built for performance.

---

<!--
## What is Seraph Design System?

This style guide documents the standards for building and maintaining design systems we follow at Seraph along with explaining the reasoning for our decisions and tooling.

This style guide is intended to be a living representation of how Seraph works with design systems. Over time, the recommendations will change as our tools and workflows evolve. While the guide is designed holistically, the tools and decisions in this guide can be used independently of each other.

## Who is this style-guide for?

This style-guide is intended to be opinionated, and focused on the kinds of work that Seraph does. Many decision inherently have trade-offs and the trade-offs made in this style-guide might not be the right ones for every company. We document these decisions fastidiously, and encourage you to use the bits that make sense for you.
 -->

## Concepts

<!-- > What is seraph design system? Purpose, Goals, Reasoning. -->

Seraph design system is built on the atomic design principle presented by Brad Frost.

> Each of the components are grouped into five distinct categories of the atomic priniciple - Atoms, Molecules, Organisms, Templates and Pages

### Terminology

- Atoms

> Seraph components such as Buttons, inputs, labels and other basic elements fall into this category. They are simple elements that cannot be broken down into smaller functional pieces

- Molecules

> Components such as search form that are a combination of two or more atoms fall into these category. Thus, in this category, two or more atoms are brought together to form a functional group

- Organisms

> Organisms are relatively larger UI components composed of groups of molecules and/or atoms and/or other organisms. These organisms form distinct sections of an interface. an example is seraph profile card

- Design Language

> The collection of design decisions that represent a company, brand or product. Usually includes colour, typography, spacing, language and tone of voice, illustrations and iconography, visual style, and patterns of applying all of these to reference designs.

- Design System

> The composition of components, patterns and processes that is consumable, documented, published to be able to be reusable and scalable in a business domain

<!-- - Design Tokens

> Implementation agnostic variables that describe the subset of values core to a design system. -->

- Theme

> A customisable subset of design decisions that expresses sweeping style changes through the system.

<!-- - Packs

> A cluster of design tokens grouped according to how they should be used. See [Packs](#Packs) -->

- Packages

> A collection of one or more components or utilities, conceptually identifiable as a concern of the design system, documented and published to a package registry.

- Components

> Components encapsulate functionality that renders a `view` with `styles` based on a `state`.

<!-- > See [Components](#Components) -->

<!-- - State

> The combination of component that affect the appearance or behaviour of the
 -->
<!-- - Controllable State

> This is an important concept regarding how state can be optionally provided to a component, along with a callback that is invoked when the state should change. The fallback behaviour is for the component to manage the state and default callback behaviour internally. -->

<!-- - Switches

> Props that can change the appearance and/or behaviour of a component. Often selected from a set of possible values. Examples include appearance or color of a button, first day of the week in a calendar, etc. -->

# Components

<!-- > NOTE: Here we describe developing React components for a design system. The principles are largely translatable to React Native projects as well, but other frameworks and technologies are out of scope for our style guide at this time.

> TODO: Review [React Patterns](https://reactpatterns.com) for inspiration - this does a good job of presenting various technical approaches you can take in React, and we can learn from the way it is organised and presented! -->

Components encapsulate functionality that renders a `view` with `styles` based on a `state`.

`(state) => ({ styles, view })`

We also recognise functional building blocks and controllers that are used by components to manage state, side effects and other concerns.

## Package Structure

> TODO: this needs to go hand-in-hand with some more depth around how documentation and examples are developed and published to make sense.

```
- node_modules/
- packages/
  - react
    - lib/
    - node_modules/
    - src/
    - package.json
    - rollup.config.js
    - tsconfig.json
  - scss
    - lib/
    - node_modules/
    - src/
    - package.json
    - .stylelintrc.json
    - gulpfile.js
  - vue
- playground/
  - react
  - vue
- tests/
- package.json
- lerna.json
- .gitignore
```

# Component Usage

### Button

```
<Button bg='primary' text='Click Me' />
```

Button component has a list of predefined styles that can be defined using varius css properties.

- bg-primary represent a primary action.
- bg-success represent a successful action.
- bg-info represent an informative action.
- bg-warning Used to show caution.
- bg-danger represent disapproval.

```
<Button type='submit' text='Submit' />
```

Button component has a different types depending on intended action. type could be reset or submit.

- type-reset returns to an initial state.
- type-submit for submittion.

```
<Button btnStyle='round' text='Submit' />
```

Button component could be rounded, flat or a simple link

- btn-round returns to an initial state.
- btn-flat for submittion.
- btn-link for submittion.

### Alert Message

```
<AlertMessage
              icon={aitimes}
              alert="danger"
              message="Error 404, the web page you requested is not found"
/>
```

Alert Message component has a list of predefined styles that can be defined using varius css properties.

- alert-primary to display a basic message.
- alert-success represent a positive feedback.
- alert-info present an information.
- alert-warning Used to show caution.
- alert-danger represent disapproved result.

```
<AlertMessage
        alertClass='outline'
        icon={aitimes}
        alert="danger"
        message="Error 404, the web page you requested is not found"
 />
```

Alert component has different classes depending on severity and variant. variant could be filled, outlined or text.

- class-filled has a deeper tone.
- class-outlined has a light tone.

## Design

### Accessibility

- Accessible color palette
- Keyboard interactions designed up front
- Typescale is readable and appropriate

### Interaction

- Clearly outlined specification for user interactions and / or user input.

### Context

- How and why the component should be used is clearly defined.

### State

- The different states the component can be in are clearly defined and designed.

### Content

- Defined guideliens around content for and with the component.

### Customisation

- `The component has defined aspects which are custommizable. If applicable, as well as the corresponding values.` - Emma Wedekind

### Responsiveness

- How the component scales across varying viewport sizes and screen resolutions is clearly defined.
- How the component scales within a grid.

## Engineering

### Accessibility

- Components are AA compliant

### Responsiveness

- The component responds gracefully to different viewport sizes.
- The component responds gracefully to changes within a grid.

### State

- This component includes all of the neutral, hover, focus and disabled states as defined in design.

### Customization

- Component has clear patterns for customisations, as per design. (see overrides)

### Error Handling

- This component handles errors gracefully

### Browser Compatibility

- IE11+
- Polyfills provided for newer technologies.

### Testing:

- Unit tests
- Integration tests
- Cross browser tests.

## Documentation

### Properties

- The props of the component and its exported subcomponents are clearly defined and described.

### Interactive Examples

- Common and best patterns for usage are clearly defined and illustrated with examples.

### Code snippets

- Interactive examples should be accompanied by code snippets

### Context Definition

- When, where, how to use the component.
- Related components

### Wireframe view of component

> Dan to add more about this

# Development

>

# Testing
