import {
  TextBIcon,
  TextItalicIcon,
  TextUnderlineIcon,
} from "@phosphor-icons/react/ssr";
import {
  ToggleGroup,
  ToggleGroupItem,
  ToggleGroupSeparator,
} from "@/components/ui/toggle-group";

export default function Particle() {
  return (
    <ToggleGroup defaultValue={["bold"]} variant="outline">
      <ToggleGroupItem aria-label="Toggle bold" value="bold">
        <TextBIcon />
      </ToggleGroupItem>
      <ToggleGroupSeparator />
      <ToggleGroupItem aria-label="Toggle italic" value="italic">
        <TextItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupSeparator />
      <ToggleGroupItem aria-label="Toggle underline" value="underline">
        <TextUnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
