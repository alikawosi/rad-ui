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
} from "@/registry/web/ui";

export const code = `<DialogContent className="sm:max-w-md flex flex-col max-h-[85vh]">
  <DialogHeader>
    <DialogTitle>فوتر ثابت</DialogTitle>
    <DialogDescription>...</DialogDescription>
  </DialogHeader>
  <div className="flex-1 overflow-y-auto -mx-6 px-6">
    {/* Scrollable content */}
  </div>
  <DialogFooter className="border-t border-border pt-4 -mx-6 px-6 -mb-6 pb-6 bg-background">
    <DialogClose asChild>
      <Button variant="outline">انصراف</Button>
    </DialogClose>
    <Button>تایید</Button>
  </DialogFooter>
</DialogContent>`;

export default function StickyFooterExample() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">فوتر ثابت</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md flex flex-col max-h-[85vh]">
        <DialogHeader>
          <DialogTitle>فوتر ثابت</DialogTitle>
          <DialogDescription>
            این دیالوگ فوتر ثابتی دارد که همیشه قابل مشاهده است
          </DialogDescription>
        </DialogHeader>
        <div className="flex-1 overflow-y-auto -mx-6 px-6">
          {Array.from({ length: 10 }).map((_, index) => (
            <p key={index} className="mb-4 leading-relaxed">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.
            </p>
          ))}
        </div>
        <DialogFooter className="border-t border-border pt-4 -mx-6 px-6 -mb-6 pb-6 bg-background">
          <DialogClose asChild>
            <Button variant="outline">انصراف</Button>
          </DialogClose>
          <Button>تایید</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
