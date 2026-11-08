import { EnvelopeIcon } from "@phosphor-icons/react/ssr";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export default function Particle() {
  return (
    <InputGroup>
      <InputGroupInput aria-label="Email" placeholder="Email" type="email" />
      <InputGroupAddon align="inline-end">
        <EnvelopeIcon aria-hidden="true" />
      </InputGroupAddon>
    </InputGroup>
  );
}
