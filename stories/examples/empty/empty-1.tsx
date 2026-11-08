import { BookIcon, PathIcon } from "@phosphor-icons/react/ssr";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export default function Particle() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <PathIcon />
        </EmptyMedia>
        <EmptyTitle>No upcoming meetings</EmptyTitle>
        <EmptyDescription>Create a meeting to get started.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex gap-2">
          <Button size="sm">Create meeting</Button>
          <Button size="sm" variant="outline">
            <BookIcon />
            View docs
          </Button>
        </div>
      </EmptyContent>
    </Empty>
  );
}
