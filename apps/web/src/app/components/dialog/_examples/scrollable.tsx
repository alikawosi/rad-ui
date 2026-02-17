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

export const code = `<DialogContent>
  <DialogHeader>
    <DialogTitle>محتوای قابل اسکرول</DialogTitle>
    <DialogDescription>...</DialogDescription>
  </DialogHeader>
  <div className="max-h-[50vh] overflow-y-auto -mx-6 px-6">
    {/* Long content here */}
  </div>
  <DialogFooter>
    <DialogClose asChild>
      <Button variant="outline">بستن</Button>
    </DialogClose>
  </DialogFooter>
</DialogContent>`;

export default function ScrollableExample() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">محتوای طولانی</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>محتوای قابل اسکرول</DialogTitle>
          <DialogDescription>
            این دیالوگ محتوای طولانی دارد که قابل اسکرول است
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-[50vh] overflow-y-auto -mx-6 px-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <p key={index} className="mb-4 leading-relaxed">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
          ))}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">بستن</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
