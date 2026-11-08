import { MagnifyingGlassIcon } from "@phosphor-icons/react/ssr";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export default function Particle() {
  return (
    <InputGroup>
      <InputGroupAddon>
        <MagnifyingGlassIcon aria-hidden="true" />
      </InputGroupAddon>
      <InputGroupInput aria-label="Search" placeholder="Search" type="search" />
    </InputGroup>
  );
}
