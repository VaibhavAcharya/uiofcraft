import { WarningCircleIcon } from "@phosphor-icons/react/ssr";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Particle() {
  return (
    <Alert variant="error">
      <WarningCircleIcon />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        Describe what can be done about it here.
      </AlertDescription>
    </Alert>
  );
}
