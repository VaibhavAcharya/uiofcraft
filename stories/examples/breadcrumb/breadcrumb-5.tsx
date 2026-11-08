import { DiamondsFourIcon, HouseIcon } from "@phosphor-icons/react/ssr";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Particle() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            className="inline-flex items-center gap-1.5"
            render={<Link href="/" />}
          >
            <HouseIcon aria-hidden="true" className="size-4" />
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink
            className="inline-flex items-center gap-1.5"
            render={<Link href="/docs/" />}
          >
            <DiamondsFourIcon aria-hidden="true" className="size-4" />
            Components
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
