export const code = `import { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

export default function MyComponent() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Basic Drawer */}
      <Drawer>
        <DrawerTrigger asChild>
          <Button>Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Title</DrawerTitle>
            <DrawerDescription>Description</DrawerDescription>
          </DrawerHeader>
          <div className="p-4">Content goes here</div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      {/* Side Drawer */}
      <Drawer direction="right">
        <DrawerTrigger asChild>
          <Button>Open Side Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Side Panel</DrawerTitle>
          </DrawerHeader>
          <div className="p-4">Side content</div>
        </DrawerContent>
      </Drawer>

      {/* Controlled Drawer */}
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button>Controlled</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Controlled Drawer</DrawerTitle>
          </DrawerHeader>
          <Button onClick={() => setOpen(false)}>
            Close programmatically
          </Button>
        </DrawerContent>
      </Drawer>
    </div>
  );
}`;
