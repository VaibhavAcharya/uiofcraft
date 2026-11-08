import { CaretLeftIcon } from "@phosphor-icons/react/ssr";
import { Button } from "@/components/ui/button";

export default function Particle() {
  return (
    <Button variant="link">
      <CaretLeftIcon aria-hidden="true" />
      Go back
    </Button>
  );
}
