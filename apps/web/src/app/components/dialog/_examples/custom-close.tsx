"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  Button,
  Input,
} from "@/registry/web/ui";

export const code = `<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">اشتراک‌گذاری لینک</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-md">
    <DialogHeader>
      <DialogTitle>اشتراک‌گذاری لینک</DialogTitle>
      <DialogDescription>
        هر کسی که این لینک را داشته باشد می‌تواند محتوا را ببیند
      </DialogDescription>
    </DialogHeader>
    <div className="flex items-center gap-2">
      <Input defaultValue="https://..." readOnly className="flex-1" />
      <Button type="button" size="sm">کپی</Button>
    </div>
    <DialogFooter className="sm:justify-start">
      <DialogClose asChild>
        <Button type="button" variant="outline">بستن</Button>
      </DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>`;

export default function CustomCloseExample() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">اشتراک‌گذاری لینک</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>اشتراک‌گذاری لینک</DialogTitle>
          <DialogDescription>
            هر کسی که این لینک را داشته باشد می‌تواند محتوا را ببیند
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <Input
            defaultValue="https://quarklab.dev/r/dialog"
            readOnly
            className="flex-1"
          />
          <Button type="button" size="sm">
            کپی
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="outline">
              بستن
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
