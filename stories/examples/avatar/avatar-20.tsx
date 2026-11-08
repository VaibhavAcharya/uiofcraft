import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipPopup, TooltipTrigger } from "@/components/ui/tooltip";

export default function Particle() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Avatar />}>
        <AvatarImage
          alt="Frida Kahlo"
          src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=96&h=96&dpr=2&q=80"
        />
        <AvatarFallback>FK</AvatarFallback>
      </TooltipTrigger>
      <TooltipPopup>Frida Kahlo</TooltipPopup>
    </Tooltip>
  );
}
