import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Hello, { HelloProps } from './Hello';

export default {
  title: 'Components/basic/Button', // 스토리북에서 보여질 그룹과 경로를 명시
  component: Hello, // 어떤 컴포넌트를 문서화 할지 명시
  //   decorators: [withKnobs], // 애드온 적용
  argTypes: {
    name: {
      control: { type: 'text' },
    },
    big: {
      control: { type: 'boolean' },
    },
  },
} as Meta;

const Template: Story<HelloProps> = (args) => <Hello {...args} />;

// controls are auto-detected
export const Basic = Template.bind({});
