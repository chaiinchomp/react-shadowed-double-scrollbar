import React from 'react';

import DoubleScrollbar from '../DoubleScrollbar';

export default {
  title: 'Double Scrollbar',
  component: DoubleScrollbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = ({shadowVariant, textColor, backgroundColor}) => (
  <div style={{width:"800px"}}>
        <DoubleScrollbar shadowVariant={shadowVariant} backgroundColor={backgroundColor}>
            <div style={{width:"1000px", color: textColor}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </DoubleScrollbar>
    </div>
);

export const HorizontalDoubleScrollbarDefault = Template.bind({});
HorizontalDoubleScrollbarDefault.args = {
  textColor: '#000'
};

export const HorizontalDoubleScrollbarLight = Template.bind({});
HorizontalDoubleScrollbarLight.args = {
  shadowVariant:'dark',
  textColor: '#000',
  backgroundColor: '#fff'
};

export const HorizontalDoubleScrollbarDark = Template.bind({});
HorizontalDoubleScrollbarDark.args = {
  shadowVariant: 'light',
  textColor: '#fff',
  backgroundColor: '#222'
};