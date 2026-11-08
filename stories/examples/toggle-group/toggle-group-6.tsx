import {
  TextBIcon,
  TextItalicIcon,
  TextUnderlineIcon,
} from "@phosphor-icons/react/ssr";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function Particle() {
  return (
    <ToggleGroup defaultValue={["bold"]} disabled>
      <ToggleGroupItem aria-label="Toggle bold" value="bold">
        <TextBIcon />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Toggle italic" value="italic">
        <TextItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Toggle underline" value="underline">
        <TextUnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
