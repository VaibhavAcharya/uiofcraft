import { PlusIcon } from "@phosphor-icons/react/ssr";
import { Button } from "@/components/ui/button";

export default function Particle() {
  return (
    <Button aria-label="Add" size="icon-sm">
      <PlusIcon aria-hidden="true" />
    </Button>
  );
}
