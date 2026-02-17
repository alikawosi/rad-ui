"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Button,
} from "@/registry/web/ui";

export const code = `<Drawer direction="right">
  <DrawerTrigger asChild>
    <Button variant="outline">کشو تودرتو</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>کشو اول</DrawerTitle>
    </DrawerHeader>
    <div className="p-4">
      <Drawer direction="right">
        <DrawerTrigger asChild>
          <Button>باز کردن کشو دوم</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>کشو دوم</DrawerTitle>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">بستن</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
    <DrawerFooter>
      <DrawerClose asChild>
        <Button variant="outline">بستن</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`;

export default function NestedExample() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline">کشو تودرتو</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>کشو اول</DrawerTitle>
        </DrawerHeader>
        <div className="p-4">
          <Drawer direction="right">
            <DrawerTrigger asChild>
              <Button>باز کردن کشو دوم</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>کشو دوم</DrawerTitle>
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="outline">بستن</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">بستن</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
