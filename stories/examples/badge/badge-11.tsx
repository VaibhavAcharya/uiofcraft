import { CheckIcon } from "@phosphor-icons/react/ssr";
import { Badge } from "@/components/ui/badge";

export default function Particle() {
  return (
    <Badge variant="outline">
      <CheckIcon aria-hidden="true" />
      Verified
    </Badge>
  );
}
