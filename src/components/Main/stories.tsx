import { Meta, Story } from '@storybook/react/types-6-0';

import Main from '.';

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Title Default',
  },
} as Meta;

export const Basic: Story = args => <Main {...args} />;
Basic.args = {
  title: 'NextJS Basic Boilerplate',
};
