import {
  CaretDownIcon,
  CaretLeftIcon,
  CaretRightIcon,
  CaretUpIcon,
  CircleIcon,
} from "@phosphor-icons/react/ssr";
import { Button } from "@/components/ui/button";

export default function Particle() {
  return (
    <div className="inline-grid w-fit grid-cols-3 gap-1">
      <Button
        aria-label="Pan camera up"
        className="col-start-2"
        size="icon"
        variant="outline"
      >
        <CaretUpIcon aria-hidden="true" />
      </Button>
      <Button
        aria-label="Pan camera left"
        className="col-start-1"
        size="icon"
        variant="outline"
      >
        <CaretLeftIcon aria-hidden="true" />
      </Button>
      <div aria-hidden="true" className="flex items-center justify-center">
        <CircleIcon className="size-4 opacity-80" />
      </div>
      <Button aria-label="Pan camera right" size="icon" variant="outline">
        <CaretRightIcon aria-hidden="true" />
      </Button>
      <Button
        aria-label="Pan camera down"
        className="col-start-2"
        size="icon"
        variant="outline"
      >
        <CaretDownIcon aria-hidden="true" />
      </Button>
    </div>
  );
}
