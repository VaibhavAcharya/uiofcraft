import { UserIcon } from "@phosphor-icons/react/ssr";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Particle() {
  return (
    <Avatar>
      <AvatarFallback>
        <UserIcon className="size-4" />
      </AvatarFallback>
    </Avatar>
  );
}
