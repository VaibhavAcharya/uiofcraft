import {
  GithubLogoIcon,
  GoogleLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react/ssr";
import { Button } from "@/components/ui/button";

export default function Particle() {
  return (
    <div className="flex flex-col gap-2">
      <Button variant="outline">
        <GoogleLogoIcon aria-hidden="true" />
        <span className="flex-1">Login with Google</span>
      </Button>
      <Button variant="outline">
        <XLogoIcon aria-hidden="true" />
        <span className="flex-1">Login with X</span>
      </Button>
      <Button variant="outline">
        <GithubLogoIcon aria-hidden="true" />
        <span className="flex-1">Login with GitHub</span>
      </Button>
    </div>
  );
}
