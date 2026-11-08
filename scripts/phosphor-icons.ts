import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const phosphorImport = "@phosphor-icons/react/ssr";

const iconMap: Record<string, string> = {
  AlignCenterIcon: "TextAlignCenterIcon",
  AlignLeftIcon: "TextAlignLeftIcon",
  AlignRightIcon: "TextAlignRightIcon",
  ArchiveIcon: "ArchiveIcon",
  ArrowDownIcon: "ArrowDownIcon",
  ArrowLeftIcon: "ArrowLeftIcon",
  ArrowRightIcon: "ArrowRightIcon",
  ArrowUpIcon: "ArrowUpIcon",
  AtSignIcon: "AtIcon",
  BellIcon: "BellIcon",
  BoldIcon: "TextBIcon",
  BookIcon: "BookIcon",
  BookmarkIcon: "BookmarkSimpleIcon",
  BoxIcon: "CubeIcon",
  CableIcon: "PlugIcon",
  CalendarIcon: "CalendarBlankIcon",
  CheckIcon: "CheckIcon",
  ChevronDownIcon: "CaretDownIcon",
  ChevronLeftIcon: "CaretLeftIcon",
  ChevronRight: "CaretRightIcon",
  ChevronRightIcon: "CaretRightIcon",
  ChevronUpIcon: "CaretUpIcon",
  ChevronsUpDownIcon: "CaretUpDownIcon",
  CircleAlertIcon: "WarningCircleIcon",
  CircleCheckIcon: "CheckCircleIcon",
  CircleIcon: "CircleIcon",
  CircleQuestionMarkIcon: "QuestionIcon",
  ClockIcon: "ClockIcon",
  Code2Icon: "CodeIcon",
  ComponentIcon: "DiamondsFourIcon",
  CopyIcon: "CopyIcon",
  CornerDownLeftIcon: "ArrowElbowDownLeftIcon",
  CornerUpLeftIcon: "ArrowBendUpLeftIcon",
  DatabaseIcon: "DatabaseIcon",
  DollarSignIcon: "CurrencyDollarIcon",
  DownloadIcon: "DownloadSimpleIcon",
  EditIcon: "PencilSimpleIcon",
  EllipsisIcon: "DotsThreeIcon",
  EyeIcon: "EyeIcon",
  EyeOffIcon: "EyeSlashIcon",
  FilesIcon: "FilesIcon",
  FilmIcon: "FilmStripIcon",
  FolderIcon: "FolderIcon",
  FoldersIcon: "FoldersIcon",
  FunnelIcon: "FunnelIcon",
  GitForkIcon: "GitForkIcon",
  GlobeIcon: "GlobeIcon",
  HomeIcon: "HouseIcon",
  HouseIcon: "HouseIcon",
  ImageIcon: "ImageIcon",
  InboxIcon: "TrayIcon",
  InfoIcon: "InfoIcon",
  ItalicIcon: "TextItalicIcon",
  LayersIcon: "StackIcon",
  LinkIcon: "LinkIcon",
  Loader2Icon: "CircleNotchIcon",
  LoaderCircleIcon: "CircleNotchIcon",
  MailIcon: "EnvelopeIcon",
  MapPinIcon: "MapPinIcon",
  MicIcon: "MicrophoneIcon",
  MinusIcon: "MinusIcon",
  MoreHorizontal: "DotsThreeIcon",
  MoreHorizontalIcon: "DotsThreeIcon",
  PanelLeftIcon: "SidebarSimpleIcon",
  PanelsTopLeftIcon: "LayoutIcon",
  PaperclipIcon: "PaperclipIcon",
  PauseIcon: "PauseIcon",
  PencilIcon: "PencilSimpleIcon",
  PercentIcon: "PercentIcon",
  PlaneTakeoffIcon: "AirplaneTakeoffIcon",
  PlayIcon: "PlayIcon",
  PlusIcon: "PlusIcon",
  PrinterIcon: "PrinterIcon",
  QrCodeIcon: "QrCodeIcon",
  RiFacebookFill: "FacebookLogoIcon",
  RiGithubFill: "GithubLogoIcon",
  RiGoogleFill: "GoogleLogoIcon",
  RiTwitterXFill: "XLogoIcon",
  RotateCcwIcon: "ArrowCounterClockwiseIcon",
  RouteIcon: "PathIcon",
  SaveIcon: "FloppyDiskIcon",
  SearchIcon: "MagnifyingGlassIcon",
  SettingsIcon: "GearIcon",
  Share2Icon: "ShareNetworkIcon",
  ShareIcon: "ExportIcon",
  ShieldAlertIcon: "ShieldWarningIcon",
  SkipBackIcon: "SkipBackIcon",
  SkipForwardIcon: "SkipForwardIcon",
  SparklesIcon: "SparkleIcon",
  SquareSlashIcon: "CommandIcon",
  StarIcon: "StarIcon",
  ThumbsUpIcon: "ThumbsUpIcon",
  TrashIcon: "TrashIcon",
  TriangleAlertIcon: "WarningIcon",
  UnderlineIcon: "TextUnderlineIcon",
  UserIcon: "UserIcon",
  UserRoundIcon: "UserCircleIcon",
  UserRoundPlusIcon: "UserPlusIcon",
  UsersRoundIcon: "UsersIcon",
  Volume2Icon: "SpeakerHighIcon",
  VolumeXIcon: "SpeakerXIcon",
  XIcon: "XIcon",
  ZapIcon: "LightningIcon",
  ZoomInIcon: "MagnifyingGlassPlusIcon",
  ZoomOutIcon: "MagnifyingGlassMinusIcon",
};

const sourceImport =
  /import\s*\{([^}]*)\}\s*from\s*"(?:lucide-react|@remixicon\/react)";?\n?/g;

export function toPhosphor(code: string, file: string): string {
  const names = [...code.matchAll(sourceImport)].flatMap((match) =>
    match[1]
      .split(",")
      .map((name) => name.trim())
      .filter(Boolean),
  );
  if (names.length === 0) return code;

  const missing = names.filter((name) => !iconMap[name]);
  if (missing.length > 0) {
    throw new Error(`${file}: no Phosphor icon for ${missing.join(", ")}`);
  }

  const firstImport = code.search(sourceImport);
  let rest = code.replace(sourceImport, "");
  for (const name of names) {
    rest = rest.replace(new RegExp(`\\b${name}\\b`, "g"), iconMap[name]);
  }
  const targets = [...new Set(names.map((name) => iconMap[name]))].sort();
  const phosphor = `import { ${targets.join(", ")} } from "${phosphorImport}";\n`;
  return rest.slice(0, firstImport) + phosphor + rest.slice(firstImport);
}

const sourceFiles = (dir: string): string[] =>
  readdirSync(dir).flatMap((entry) => {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) return sourceFiles(path);
    return /\.tsx?$/.test(entry) ? [path] : [];
  });

if (import.meta.main) {
  let changed = 0;
  for (const file of process.argv.slice(2).flatMap(sourceFiles)) {
    const code = readFileSync(file, "utf8");
    const next = toPhosphor(code, file);
    if (next !== code) {
      writeFileSync(file, next);
      changed++;
    }
  }
  console.log(`Switched ${changed} files to Phosphor icons`);
}
