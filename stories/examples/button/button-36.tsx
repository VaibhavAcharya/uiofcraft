"use client";

import { CheckIcon, CopyIcon } from "@phosphor-icons/react/ssr";
import { Button } from "@/components/ui/button";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

export default function Particle() {
  const { copyToClipboard, isCopied } = useCopyToClipboard();

  return (
    <Button onClick={() => copyToClipboard("Text copied!")} variant="outline">
      {isCopied ? (
        <>
          <CheckIcon aria-hidden="true" />
          Copied
        </>
      ) : (
        <>
          <CopyIcon aria-hidden="true" />
          Copy
        </>
      )}
    </Button>
  );
}
