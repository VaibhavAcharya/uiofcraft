"use client";

import { CheckIcon, CopyIcon } from "@phosphor-icons/react/ssr";
import { Button } from "@/components/ui/button";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

export default function Particle() {
  const { copyToClipboard, isCopied } = useCopyToClipboard();

  return (
    <Button
      aria-label={isCopied ? "Copied" : "Copy to clipboard"}
      onClick={() => copyToClipboard("Text copied!")}
      size="icon"
      variant="outline"
    >
      {isCopied ? (
        <CheckIcon aria-hidden="true" />
      ) : (
        <CopyIcon aria-hidden="true" />
      )}
    </Button>
  );
}
