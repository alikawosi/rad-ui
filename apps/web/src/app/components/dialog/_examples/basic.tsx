"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Button,
} from "@/registry/web/ui";

export const code = `import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">باز کردن دیالوگ</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>عنوان دیالوگ</DialogTitle>
          <DialogDescription>
            این یک توضیح کوتاه درباره محتوای دیالوگ است
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p>محتوای اصلی دیالوگ</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}`;

export default function BasicExample() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">باز کردن دیالوگ</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>عنوان دیالوگ</DialogTitle>
          <DialogDescription>
            این یک توضیح کوتاه درباره محتوای دیالوگ است
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-muted-foreground">
            محتوای اصلی دیالوگ در اینجا قرار می‌گیرد
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
