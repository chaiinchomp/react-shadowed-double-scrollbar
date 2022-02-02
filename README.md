# React Shadowed Double Scrollbar

A simple react component for adding scrollbars on both top and bottom of content with customizable shadows.

Standalone fork of [umchee/react-double-scrollbar](https://github.com/umchee/react-double-scrollbar). Fully rewritten in functional style, with the addition of shadows to make it clearer to users if an element can be scrolled (particularly useful for mobile browsers where scrollbars are hidden by default).

**[Storybook demo](https://chaiinchomp.github.io/react-shadowed-double-scrollbar)**

**[NPM package](https://www.npmjs.com/package/react-shadowed-double-scrollbar)**

# Usage

## Setup

```
npm install react-shadowed-double-scrollbar
```

## Properties

| Property | Type | Required? | Description | Valid values | Default value |
| -------- | ---- | --------- | ----------- | ------------ | ------------- |
| `backgroundColor` | String | No | Custom background color of scrollbox | Any valid css color string (color name or hex code) | Depends on value of `shadowVariant`: <ul><li>`off`: no background</li><li>`light`: dark background (`#111111`)</li><li>`dark`: light background (`#ffffff`)</li></ul> |
| `shadowVariant` | String | No | Type of shadow to display on the edge of the scrollable content. | `light`, `dark`, or `off` | `dark` |

## Examples

```javascript
import DoubleScrollbar from 'react-shadowed-double-scrollbar';

<DoubleScrollbar>
    <div>Your content or other components here!</div>
</DoubleScrollbar>
```

For additional examples and live demos, see [Storybook](https://chaiinchomp.github.io/react-shadowed-double-scrollbar).
