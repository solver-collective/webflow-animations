# Webflow Animations

Applies CSS or Greensock animations based on element data attributes

### Data Attributes

_CSS_

- `data-animation-type` - Type of animation to run. Example: `css`, `greensock`
- `data-from` - String of CSS starting values to animate from. Ex: `width: 100px;top: 0px;`
- `data-to` - String of CSS ending values to animate to. `width: 200px; top: 100px;`
- `data-duration` - (Optional) Duration animation takes to complete in either seconds or milliseconds. Ex: `1000ms` or `1s`
- `data-delay` - (Optional) Time until animation starts in either seconds or milliseconds. Ex: `1000ms` or `1s`
- `data-iteration` - (Optional) Number of times animation runs. Example: `3`
- `data-direction` - (Optional) Determines what direction animation should run in, can be left blank or use the following. Example: `normal`, `reverse`, `alternate`, `alternate-reverse`
- `data-timing` - (Optional) Determines speed of animation along the animation timeline, can be left blank or use the following. `linear`, `ease`, `ease-in`, `ease-out`, `ease-in-out`, `cubic-bezier(n,n,n,n)`
