"use client";

import { LinkIcon, TextBIcon, TextItalicIcon } from "@phosphor-icons/react/ssr";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Toggle } from "@/components/ui/toggle";

export default function Particle() {
  return (
    <InputGroup>
      <InputGroupTextarea placeholder="Tell us about yourself…" />
      <InputGroupAddon
        align="block-start"
        className="gap-1 rounded-t-lg border-b bg-muted/72 p-2!"
      >
        <Toggle aria-label="Toggle bold" size="sm">
          <TextBIcon aria-hidden="true" />
        </Toggle>
        <Toggle aria-label="Toggle italic" size="sm">
          <TextItalicIcon aria-hidden="true" />
        </Toggle>
        <Button aria-label="Link" size="icon-sm" variant="ghost">
          <LinkIcon aria-hidden="true" />
        </Button>
      </InputGroupAddon>
    </InputGroup>
  );
}
