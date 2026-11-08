"use client";

import { CalendarBlankIcon } from "@phosphor-icons/react/ssr";
import { format } from "date-fns";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverPopup, PopoverTrigger } from "@/components/ui/popover";

export default function Particle() {
  const [date, setDate] = useState<Date | undefined>();

  return (
    <Popover>
      <PopoverTrigger
        render={<Button className="w-full justify-start" variant="outline" />}
      >
        <CalendarBlankIcon aria-hidden="true" />
        {date ? format(date, "PPP") : "Pick a date"}
      </PopoverTrigger>
      <PopoverPopup>
        <Calendar
          defaultMonth={date}
          mode="single"
          onSelect={setDate}
          selected={date}
        />
      </PopoverPopup>
    </Popover>
  );
}
