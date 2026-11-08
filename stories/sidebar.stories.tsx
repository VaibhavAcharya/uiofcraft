import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  FolderIcon,
  HomeIcon,
  InboxIcon,
  PlusIcon,
  SettingsIcon,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const meta = {
  title: "Components/Sidebar",
  parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const items = [
  { icon: HomeIcon, label: "Home", active: true },
  { icon: InboxIcon, label: "Inbox", badge: "4" },
  { icon: SettingsIcon, label: "Settings" },
];

const projects = ["Portfolio", "stateofpixel", "companyofcraft"];

function Example({
  collapsible,
  variant,
}: {
  collapsible?: "offcanvas" | "icon" | "none";
  variant?: "sidebar" | "floating" | "inset";
}) {
  return (
    <SidebarProvider>
      <Sidebar collapsible={collapsible} variant={variant}>
        <SidebarHeader>
          <span className="px-2 font-semibold text-sm">uiofcraft</span>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton
                      isActive={item.active}
                      tooltip={item.label}
                    >
                      <item.icon />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                    {item.badge && (
                      <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Projects</SidebarGroupLabel>
            <SidebarGroupAction title="Add project">
              <PlusIcon />
            </SidebarGroupAction>
            <SidebarGroupContent>
              <SidebarMenu>
                {projects.map((project) => (
                  <SidebarMenuItem key={project}>
                    <SidebarMenuButton tooltip={project}>
                      <FolderIcon />
                      <span>{project}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <span className="px-2 text-muted-foreground text-xs">v0.1.0</span>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header className="flex h-12 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <span className="text-sm">Page title</span>
        </header>
        <div className="p-4 text-muted-foreground text-sm">Page content</div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export const Default: Story = {
  render: () => <Example />,
};

export const CollapsibleToIcons: Story = {
  name: "Collapsible to icons",
  render: () => <Example collapsible="icon" />,
};

export const Inset: Story = {
  render: () => <Example variant="inset" />,
};

export const Floating: Story = {
  render: () => <Example variant="floating" />,
};
