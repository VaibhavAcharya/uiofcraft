"use client";

import { EyeIcon, EyeSlashIcon } from "@phosphor-icons/react/ssr";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Tooltip, TooltipPopup, TooltipTrigger } from "@/components/ui/tooltip";

export default function Particle() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <InputGroup>
      <InputGroupInput
        aria-label="Password with toggle visibility"
        placeholder="Enter your password"
        type={showPassword ? "text" : "password"}
      />
      <InputGroupAddon align="inline-end">
        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword(!showPassword)}
                size="icon-xs"
                variant="ghost"
              />
            }
          >
            {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
          </TooltipTrigger>
          <TooltipPopup>
            {showPassword ? "Hide password" : "Show password"}
          </TooltipPopup>
        </Tooltip>
      </InputGroupAddon>
    </InputGroup>
  );
}
