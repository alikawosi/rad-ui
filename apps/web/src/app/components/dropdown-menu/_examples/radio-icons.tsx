"use client";

import * as React from "react";
import { Button } from "@/registry/web/ui";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/web/ui";
import { CreditCard, Wallet, Smartphone } from "lucide-react";

export const code = `"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CreditCard, Wallet, Smartphone } from "lucide-react";

export default function RadioIconsExample() {
  const [method, setMethod] = React.useState("card");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">روش پرداخت</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>انتخاب روش پرداخت</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={method} onValueChange={setMethod}>
          <DropdownMenuRadioItem value="card">
            <CreditCard className="me-2 h-4 w-4" />
            <span>کارت اعتباری</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="wallet">
            <Wallet className="me-2 h-4 w-4" />
            <span>کیف پول</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="mobile">
            <Smartphone className="me-2 h-4 w-4" />
            <span>پرداخت موبایل</span>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`;

export default function RadioIconsExample() {
  const [method, setMethod] = React.useState("card");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">روش پرداخت</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>انتخاب روش پرداخت</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={method} onValueChange={setMethod}>
          <DropdownMenuRadioItem value="card">
            <CreditCard className="me-2 h-4 w-4" />
            <span>کارت اعتباری</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="wallet">
            <Wallet className="me-2 h-4 w-4" />
            <span>کیف پول</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="mobile">
            <Smartphone className="me-2 h-4 w-4" />
            <span>پرداخت موبایل</span>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
