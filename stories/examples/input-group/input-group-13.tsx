import { MagnifyingGlassIcon } from "@phosphor-icons/react/ssr";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export default function Particle() {
  return (
    <InputGroup>
      <InputGroupInput
        aria-label="Search"
        placeholder="Search"
        size="sm"
        type="search"
      />
      <InputGroupAddon>
        <MagnifyingGlassIcon aria-hidden="true" />
      </InputGroupAddon>
    </InputGroup>
  );
}
