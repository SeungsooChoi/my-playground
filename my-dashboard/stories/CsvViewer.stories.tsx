import type { Meta, StoryObj } from "@storybook/react";
import { CsvViewer } from "@/components/csv-viewer/CsvViewer";

const meta: Meta<typeof CsvViewer> = {
  title: "Components/CsvViewer",
  component: CsvViewer,
};

export default meta;
type Story = StoryObj<typeof CsvViewer>;

export const Default: Story = {
  render: () => <CsvViewer />,
};
