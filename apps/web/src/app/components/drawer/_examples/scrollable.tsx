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

export const code = `<Drawer direction="right">
  <DrawerTrigger asChild>
    <Button variant="outline">محتوای قابل اسکرول</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>محتوای طولانی</DrawerTitle>
      <DrawerDescription>این کشو محتوای قابل اسکرول دارد</DrawerDescription>
    </DrawerHeader>
    <div className="overflow-y-auto px-4 flex-1">
      {Array.from({ length: 10 }).map((_, index) => (
        <p key={index} className="mb-4 leading-relaxed">
          لورم ایپسوم متن ساختگی...
        </p>
      ))}
    </div>
    <DrawerFooter>
      <DrawerClose asChild>
        <Button variant="outline">بستن</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`;

export default function ScrollableExample() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline">محتوای قابل اسکرول</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>محتوای طولانی</DrawerTitle>
          <DrawerDescription>
            این کشو محتوای قابل اسکرول دارد
          </DrawerDescription>
        </DrawerHeader>
        <div className="overflow-y-auto px-4 flex-1 max-h-[50vh]">
          {Array.from({ length: 10 }).map((_, index) => (
            <p key={index} className="mb-4 leading-relaxed">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.
            </p>
          ))}
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
