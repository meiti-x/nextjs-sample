// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import Button from '.';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'UI/Button'
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'تست'
  }
};
