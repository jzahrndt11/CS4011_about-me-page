import type { Meta, StoryObj } from '@storybook/react';

import { Pets } from './Pets';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Pets',
  component: Pets,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
} satisfies Meta<typeof Pets>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    title: 'Pet Name',
    imgScr: 'https://media.istockphoto.com/id/806942944/photo/german-shepherd-dog.jpg?s=612x612&w=is&k=20&c=fovC4eXq2hPVujuNozKpgUPip1HNliwPCqtXrZuSp8c=',
    description: 'Breed (Lifetime)'
  },
};