import {
  CaretDownIcon,
  DownloadSimpleIcon,
  ExportIcon,
  PencilSimpleIcon,
} from "@phosphor-icons/react/ssr";
import { Button } from "@/components/ui/button";
import { Group, GroupSeparator } from "@/components/ui/group";
import { Menu, MenuItem, MenuPopup, MenuTrigger } from "@/components/ui/menu";

export default function Particle() {
  return (
    <Group aria-label="Subscription actions">
      <Button>Subscribe</Button>
      <GroupSeparator className="bg-primary/72" />
      <Menu>
        <MenuTrigger render={<Button aria-label="Copy options" size="icon" />}>
          <CaretDownIcon aria-hidden="true" className="size-4" />
        </MenuTrigger>
        <MenuPopup align="end">
          <MenuItem>
            <ExportIcon aria-hidden="true" />
            Share link
          </MenuItem>
          <MenuItem>
            <DownloadSimpleIcon aria-hidden="true" />
            Download
          </MenuItem>
          <MenuItem>
            <PencilSimpleIcon aria-hidden="true" />
            Duplicate
          </MenuItem>
        </MenuPopup>
      </Menu>
    </Group>
  );
}
