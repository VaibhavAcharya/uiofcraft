import { DownloadSimpleIcon } from "@phosphor-icons/react/ssr";
import { Button } from "@/components/ui/button";

export default function Particle() {
  return (
    <Button>
      <DownloadSimpleIcon aria-hidden="true" />
      Download
    </Button>
  );
}
