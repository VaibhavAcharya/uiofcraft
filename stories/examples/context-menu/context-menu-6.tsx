import {
  CopyIcon,
  ExportIcon,
  PencilSimpleIcon,
  TrashIcon,
} from "@phosphor-icons/react/ssr";
import {
  ContextMenu,
  ContextMenuItem,
  ContextMenuPopup,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export default function Particle() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-32 w-full max-w-sm items-center justify-center rounded-lg border border-dashed text-muted-foreground text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuPopup>
        <ContextMenuItem>
          <PencilSimpleIcon aria-hidden="true" />
          Edit
          <ContextMenuShortcut>⌘E</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <CopyIcon aria-hidden="true" />
          Copy
          <ContextMenuShortcut>⌘C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <ExportIcon aria-hidden="true" />
          Share
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          <TrashIcon aria-hidden="true" />
          Delete
          <ContextMenuShortcut>⌘⌫</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuPopup>
    </ContextMenu>
  );
}
