import {
  ArchiveIcon,
  DotsThreeIcon,
  ExportIcon,
  FilesIcon,
  FilmStripIcon,
  PencilSimpleIcon,
  TrashIcon,
} from "@phosphor-icons/react/ssr";
import { Button } from "@/components/ui/button";
import { Group, GroupSeparator } from "@/components/ui/group";
import { Menu, MenuItem, MenuPopup, MenuTrigger } from "@/components/ui/menu";

export default function Particle() {
  return (
    <Group aria-label="File actions">
      <Button>
        <FilesIcon aria-hidden="true" />
        Files
      </Button>
      <GroupSeparator className="bg-primary/72" />
      <Button>
        <FilmStripIcon aria-hidden="true" />
        Media
      </Button>
      <GroupSeparator className="bg-primary/72" />
      <Menu>
        <MenuTrigger render={<Button aria-label="Menu" size="icon" />}>
          <DotsThreeIcon aria-hidden="true" className="size-4" />
        </MenuTrigger>
        <MenuPopup align="end">
          <MenuItem>
            <PencilSimpleIcon aria-hidden="true" />
            Edit
          </MenuItem>
          <MenuItem>
            <ArchiveIcon aria-hidden="true" />
            Archive
          </MenuItem>
          <MenuItem>
            <ExportIcon aria-hidden="true" />
            Share
          </MenuItem>
          <MenuItem variant="destructive">
            <TrashIcon aria-hidden="true" />
            Delete
          </MenuItem>
        </MenuPopup>
      </Menu>
    </Group>
  );
}
