"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/registry/web/ui";

export const code = `import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

export default function SimpleExample() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink href="#">۱</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            ۲
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">۳</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">۴</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">۵</PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
`;

export default function SimpleExample() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink href="#">۱</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            ۲
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">۳</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">۴</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">۵</PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
