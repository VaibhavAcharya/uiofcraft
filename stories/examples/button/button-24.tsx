import {
  FacebookLogoIcon,
  GithubLogoIcon,
  GoogleLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react/ssr";
import { Button } from "@/components/ui/button";

export default function Particle() {
  return (
    <div className="inline-flex flex-wrap gap-2">
      <Button aria-label="Login with Google" size="icon" variant="outline">
        <GoogleLogoIcon aria-hidden="true" />
      </Button>
      <Button aria-label="Login with Facebook" size="icon" variant="outline">
        <FacebookLogoIcon aria-hidden="true" />
      </Button>
      <Button aria-label="Login with X" size="icon" variant="outline">
        <XLogoIcon aria-hidden="true" />
      </Button>
      <Button aria-label="Login with GitHub" size="icon" variant="outline">
        <GithubLogoIcon aria-hidden="true" />
      </Button>
    </div>
  );
}
