import {
  TextBIcon,
  TextItalicIcon,
  TextUnderlineIcon,
} from "@phosphor-icons/react/ssr";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Tooltip,
  TooltipPopup,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Particle() {
  return (
    <TooltipProvider>
      <ToggleGroup defaultValue={["bold"]} multiple>
        <Tooltip>
          <TooltipTrigger
            render={<ToggleGroupItem aria-label="Toggle bold" value="bold" />}
          >
            <TextBIcon />
          </TooltipTrigger>
          <TooltipPopup>Bold</TooltipPopup>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger
            render={
              <ToggleGroupItem aria-label="Toggle italic" value="italic" />
            }
          >
            <TextItalicIcon />
          </TooltipTrigger>
          <TooltipPopup>Italic</TooltipPopup>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger
            render={
              <ToggleGroupItem
                aria-label="Toggle underline"
                value="underline"
              />
            }
          >
            <TextUnderlineIcon />
          </TooltipTrigger>
          <TooltipPopup>Underline</TooltipPopup>
        </Tooltip>
      </ToggleGroup>
    </TooltipProvider>
  );
}
