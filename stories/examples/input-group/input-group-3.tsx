import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";

export default function Particle() {
  return (
    <InputGroup>
      <InputGroupInput
        aria-label="Set your URL"
        className="*:[input]:ps-0!"
        placeholder="uiofcraft"
        type="search"
      />
      <InputGroupAddon>
        <InputGroupText>i.cal.com/</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  );
}
