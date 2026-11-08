import { QrCodeIcon } from "@phosphor-icons/react/ssr";
import { Button } from "@/components/ui/button";
import { Group, GroupSeparator } from "@/components/ui/group";

export default function Particle() {
  return (
    <Group>
      <Button aria-label="QR code" size="icon">
        <QrCodeIcon aria-hidden="true" />
      </Button>
      <GroupSeparator className="bg-primary/72" />
      <Button>Sign in</Button>
    </Group>
  );
}
