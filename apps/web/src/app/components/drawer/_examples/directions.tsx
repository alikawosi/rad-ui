"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Button,
} from "@/registry/web/ui";

const DRAWER_SIDES = ["top", "right", "bottom", "left"] as const;
const LABELS: Record<(typeof DRAWER_SIDES)[number], string> = {
  top: "بالا",
  right: "راست",
  bottom: "پایین",
  left: "چپ",
};

export const code = `import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

const DRAWER_SIDES = ["top", "right", "bottom", "left"] as const;

export function DrawerDirections() {
  return (
    <div className="flex flex-wrap gap-2">
      {DRAWER_SIDES.map((side) => (
        <Drawer key={side} direction={side}>
          <DrawerTrigger asChild>
            <Button variant="outline" className="capitalize">
              {side}
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>کشو از {side}</DrawerTitle>
            </DrawerHeader>
            <div className="p-4">محتوای کشو</div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">بستن</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ))}
    </div>
  );
}`;

export default function DirectionsExample() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {DRAWER_SIDES.map((direction) => (
        <Drawer key={direction} direction={direction}>
          <DrawerTrigger asChild>
            <Button variant="outline" className="capitalize">
              {LABELS[direction]}
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>کشو از {LABELS[direction]}</DrawerTitle>
              <DrawerDescription>
                این کشو از جهت {direction} باز می‌شود
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4">
              <p className="text-muted-foreground">محتوای کشو</p>
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">بستن</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ))}
    </div>
  );
}
