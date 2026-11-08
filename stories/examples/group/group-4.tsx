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
      <Button size="lg" variant="outline">
        <FilesIcon aria-hidden="true" />
        Files
      </Button>
      <GroupSeparator />
      <Button size="lg" variant="outline">
        <FilmStripIcon aria-hidden="true" />
        Media
      </Button>
      <GroupSeparator />
      <Menu>
        <MenuTrigger
          render={<Button aria-label="Menu" size="icon-lg" variant="outline" />}
        >
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
