"use client";

import { CaretDownIcon, CaretUpIcon } from "@phosphor-icons/react/ssr";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Particle() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpand = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <Button
      aria-controls="expandable-content"
      aria-expanded={isExpanded}
      className="gap-1"
      onClick={toggleExpand}
      variant="ghost" // Use this ID on the element that this button controls
    >
      {isExpanded ? "Show less" : "Show more"}
      {isExpanded ? (
        <CaretUpIcon aria-hidden="true" className="-me-1" />
      ) : (
        <CaretDownIcon aria-hidden="true" className="-me-1" />
      )}
    </Button>
  );
}
