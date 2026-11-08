import {
  MagnifyingGlassMinusIcon,
  MagnifyingGlassPlusIcon,
} from "@phosphor-icons/react/ssr";
import { Button } from "@/components/ui/button";
import { Group, GroupSeparator } from "@/components/ui/group";

export default function Particle() {
  return (
    <Group aria-label="Zoom controls" orientation="vertical">
      <Button aria-label="Zoom in" size="icon" variant="outline">
        <MagnifyingGlassPlusIcon />
      </Button>
      <GroupSeparator orientation="horizontal" />
      <Button aria-label="Zoom Out" size="icon" variant="outline">
        <MagnifyingGlassMinusIcon />
      </Button>
    </Group>
  );
}
