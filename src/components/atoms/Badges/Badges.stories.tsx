import type { Meta, StoryObj } from '@storybook/react-vite';

import Badges from './Badges';

const meta = {
  component: Badges,
} satisfies Meta<typeof Badges>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};