"use client";

import {
  CodeIcon,
  GlobeIcon,
  LightningIcon,
  StackIcon,
} from "@phosphor-icons/react/ssr";
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const items = [
  { icon: StackIcon, label: "Components", value: "components" },
  { icon: LightningIcon, label: "Performance", value: "performance" },
  { icon: GlobeIcon, label: "Network", value: "network" },
  { icon: CodeIcon, label: "Development", value: "development" },
];

export default function Particle() {
  return (
    <Select defaultValue={items[0]} itemToStringValue={(item) => item.value}>
      <SelectTrigger aria-label="Select category">
        <SelectValue>
          {(item) => (
            <span className="flex items-center gap-2">
              <item.icon />
              <span className="truncate">{item.label}</span>
            </span>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectPopup>
        {items.map((item) => (
          <SelectItem key={item.value} value={item}>
            <span className="flex items-center gap-2">
              <item.icon />
              <span className="truncate">{item.label}</span>
            </span>
          </SelectItem>
        ))}
      </SelectPopup>
    </Select>
  );
}
