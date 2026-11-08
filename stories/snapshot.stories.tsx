import type { Meta, StoryObj } from "@storybook/react-vite";
import type * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { firstExamples } from "./examples";
import { Preview } from "./preview";
import { SidebarExample } from "./sidebar-example";

const meta = {
  title: "Snapshot",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const wideExample = /max-w-(4xl|xl|\[80%\])/;

const wideTitles = new Set(["Toolbar"]);

const fixedDate = new Date(2026, 0, 15);

const fixedExamples: Record<string, React.ReactNode> = {
  Calendar: (
    <Calendar
      mode="single"
      today={fixedDate}
      defaultMonth={fixedDate}
      selected={fixedDate}
    />
  ),
  Progress: <Progress value={60} />,
};

function Hero() {
  return (
    <header className="flex flex-col gap-4 border-b pb-8">
      <h1 className="font-heading font-semibold text-4xl">uiofcraft</h1>
      <p className="max-w-xl text-lg text-muted-foreground">
        React components, styles and fonts shared across my projects.
      </p>
      <p className="text-sm">
        Based on{" "}
        <a
          className="font-medium underline underline-offset-4"
          href="https://coss.com/ui"
        >
          coss ui
        </a>
        , built on top of{" "}
        <a
          className="font-medium underline underline-offset-4"
          href="https://base-ui.com"
        >
          Base UI
        </a>
        .
      </p>
      <code className="w-fit rounded-md border bg-muted px-2 py-1 font-mono text-sm">
        pnpm add uiofcraft
      </code>
    </header>
  );
}

function Section({
  title,
  description,
  wide,
  children,
}: {
  title: string;
  description: string;
  wide?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      className={cn(
        "flex min-w-0 flex-col gap-3 rounded-xl border p-4",
        wide && "col-span-full",
      )}
    >
      <header className="flex flex-col">
        <h2 className="font-heading font-semibold text-sm">{title}</h2>
        <p className="text-muted-foreground text-xs">{description}</p>
      </header>
      {children}
    </section>
  );
}

export const AllComponents: Story = {
  name: "All components",
  render: () => (
    <div className="flex flex-col gap-8 text-foreground">
      <Hero />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-4">
        {firstExamples.map(
          ({ title, description, previewClassName, Example }) => (
            <Section
              key={title}
              title={title}
              description={description}
              wide={wideTitles.has(title) || wideExample.test(previewClassName)}
            >
              <Preview className={previewClassName}>
                {fixedExamples[title] ?? <Example />}
              </Preview>
            </Section>
          ),
        )}
        <Section title="Label" description="Label with input and checkbox">
          <Preview>
            <div className="flex w-64 flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="snapshot-email">Email</Label>
                <Input id="snapshot-email" placeholder="you@example.com" />
              </div>
              <Label>
                <Checkbox />
                Accept terms
              </Label>
            </div>
          </Preview>
        </Section>
        <Section title="Sidebar" description="Sidebar with groups" wide>
          <div className="overflow-hidden rounded-lg border">
            <SidebarExample collapsible="none" className="h-80 min-h-0" />
          </div>
        </Section>
      </div>
    </div>
  ),
};
