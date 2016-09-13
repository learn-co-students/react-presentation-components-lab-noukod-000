# React Presentation Components Lab

## Objectives

1. Practice writing a presentation component with minimal UI state.
2. Practice writing a presentation component as a stateless function

## Overview

Presentation component are also frequently called "dumb" components. Why? Because
other than rendering themselves, they really don't know how to do much else. But,
as we've seen, there's something blissful about being "dumb" if you are a component.

![Dumb and Dumber](https://media.giphy.com/media/2dcW1Dlu2sZnW/giphy.gif)

In this lab, we'll illustrate this principle by building two components:
a `DumbComponent` and a `DumberComponent`. Our `DumbComponent`, will be presentational,
but it will have a tiny bit of state and therefore it will be less stable than
our `DumberComponent` -- specifically our `DumbComponent` will experience wild
mood fluctuations. Our `DumberComponent`, meanwhile, will be written as a
"stateless functional" component and therefore it will be steadfastly happy.

## DumbComponent

The specs for our `DumbComponent` are as follows:

1. In the `components/DumbComponent.js` file, create a `DumbComponent` component.
2. The component should be declared as a class (instance of `Component`) so
   that it can carry state.
3. The component should have a state property called `mood` that has a default
   value `happy`.
4. The component should simply render its current `mood` state to the page in
   a div.
5. The component should implement a `handleClick` function that can serve as a
   callback to the `<div>`'s click event. When clicked the component's mood 
   should toggle between happy and sad states.

The fact that this component's mood fluctuates when clicked,
while part of our design, makes it a more unpredictable part of our UI. As our
program runs, and users interact with it, we won't be able to predict what
state our component is in. Obviously, many components need state -- because our
are UIs are interactive -- but where possible it's good to avoid
state entirely, as we will see in the second component in this lab.

## DumberComponent

Although our `DumbComponent` fits the pattern of a presentation component, the
fact that it has state makes it unstable. To practice building a more stable
type of presentational component, let's build a `DumberComponent` to meet the
following specifications:

1. In the `components/DumberComponent.js` file, create a `DumberComponent` component.
2. The component should be a "stateless functional" component.
3. It should render a `<div>` to the page that contains the text: "I am just happy".
4. It should receiving one property called `handleClick` that sends a message
   to the browser via the `alert` method.

When you've finished this component, take a moment to compare it to the previous
presentational component we wrote. See how much more stable it is? It has no ability
to change its output internally. We can always know, based on the props that we
provide, what type of component it will produce. Note, as well, that this doesn't mean
that the component lacks interactivity. We can actually determine a wide variety of
click behaviors on the component just by providing a different callback. It's just that
the component cannot itself determine its behavior. And this kind of "dumbness" is
actually a good thing.

## Resources
- Dan Abramov, ["Presentational and Container Components"](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.quaiihhh3)
- [Stateless Functions](https://facebook.github.io/react/docs/reusable-components.html#stateless-functions)
