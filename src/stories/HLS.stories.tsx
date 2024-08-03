import { Meta, Story } from "@storybook/react";
import { toPersianLetterCurrency } from "../utils/helpers";

type DemoProps = {
  length: number;
};

const Demo = ({ length }: DemoProps) => (
  <p>{toPersianLetterCurrency(20000005)}</p>
);

const meta: Meta = {
  title: "base",
  component: Demo,
  argTypes: {
    length: {
      control: {
        type: "number",
      },
      defaultValue: 10,
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<DemoProps> = (args) => <Demo length={22} />;
export const Default = Template.bind({});
