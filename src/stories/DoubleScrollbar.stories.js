import React from 'react';

import DoubleScrollbar from '../index';

export default {
    title: 'Double Scrollbar',
    component: DoubleScrollbar,
    argTypes: {
        backgroundColor: { control: 'color' },
        shadowVariant: {
            control: {
                type: 'select',
                options: ['dark', 'light', 'off'],
            },
        },
        children: {
            table: {
                disable: true,
            },
        },
        textColor: {
            table: {
                disable: true,
            },
        },
    },
};

const Template = ({ shadowVariant, textColor, backgroundColor }) => (
    <div style={{ width: '800px' }}>
        <DoubleScrollbar shadowVariant={shadowVariant} backgroundColor={backgroundColor}>
            <div style={{ width: '1000px', color: textColor }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </DoubleScrollbar>
    </div>
);

export const DefaultConfiguration = Template.bind({});
DefaultConfiguration.args = {
    textColor: '#000',
};

export const DarkShadows = Template.bind({});
DarkShadows.args = {
    shadowVariant: 'dark',
    textColor: '#000',
};

export const LightShadows = Template.bind({});
LightShadows.args = {
    shadowVariant: 'light',
    textColor: '#fff',
};

export const NoShadows = Template.bind({});
NoShadows.args = {
    shadowVariant: 'off',
    textColor: '#000',
};

export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
    shadowVariant: 'dark',
    backgroundColor: '#f76464',
    textColor: '#000',
};
