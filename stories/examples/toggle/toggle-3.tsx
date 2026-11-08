import { TextBIcon } from "@phosphor-icons/react/ssr";
import { Toggle } from "@/components/ui/toggle";

export default function Particle() {
  return (
    <Toggle aria-label="Toggle bold" variant="outline">
      <TextBIcon />
    </Toggle>
  );
}
