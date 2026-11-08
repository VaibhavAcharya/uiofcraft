"use client";

import {
  CircleNotchIcon,
  MagnifyingGlassIcon,
  MicrophoneIcon,
} from "@phosphor-icons/react/ssr";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Tooltip, TooltipPopup, TooltipTrigger } from "@/components/ui/tooltip";

export default function Particle() {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (inputValue) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
    setIsLoading(false);
  }, [inputValue]);

  return (
    <InputGroup>
      <InputGroupAddon>
        {isLoading ? (
          <CircleNotchIcon
            aria-label="Loading..."
            className="animate-spin"
            role="status"
          />
        ) : (
          <MagnifyingGlassIcon aria-hidden="true" />
        )}
      </InputGroupAddon>
      <InputGroupInput
        aria-label="Search"
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search..."
        type="search"
        value={inputValue}
      />
      <InputGroupAddon align="inline-end">
        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                aria-label="Voice search"
                size="icon-xs"
                variant="ghost"
              />
            }
          >
            <MicrophoneIcon aria-hidden="true" />
          </TooltipTrigger>
          <TooltipPopup>Voice search</TooltipPopup>
        </Tooltip>
      </InputGroupAddon>
    </InputGroup>
  );
}
