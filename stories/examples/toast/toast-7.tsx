"use client";

import { CheckIcon, CopyIcon } from "@phosphor-icons/react/ssr";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { anchoredToastManager } from "@/components/ui/toast";
import { Tooltip, TooltipPopup, TooltipTrigger } from "@/components/ui/tooltip";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

export default function Particle() {
  const copyButtonRef = useRef<HTMLButtonElement>(null);
  const toastTimeout = 2000;

  const { copyToClipboard, isCopied } = useCopyToClipboard({
    onCopy: () => {
      if (copyButtonRef.current) {
        anchoredToastManager.add({
          data: {
            tooltipStyle: true,
          },
          positionerProps: {
            anchor: copyButtonRef.current,
          },
          timeout: toastTimeout,
          title: "Copied!",
        });
      }
    },
    timeout: toastTimeout,
  });

  function handleCopy() {
    const url = "https://github.com/VaibhavAcharya/uiofcraft";
    copyToClipboard(url);
  }

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            aria-label="Copy link"
            disabled={isCopied}
            onClick={handleCopy}
            ref={copyButtonRef}
            size="icon"
            variant="outline"
          />
        }
      >
        {isCopied ? (
          <CheckIcon className="size-4" />
        ) : (
          <CopyIcon className="size-4" />
        )}
      </TooltipTrigger>
      <TooltipPopup>
        <p>Copy to clipboard</p>
      </TooltipPopup>
    </Tooltip>
  );
}
