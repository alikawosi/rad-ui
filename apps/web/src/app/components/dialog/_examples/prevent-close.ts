export const code = `<DialogContent
  onPointerDownOutside={(e) => e.preventDefault()}
  onEscapeKeyDown={(e) => e.preventDefault()}
  onInteractOutside={(e) => e.preventDefault()}
>
  <DialogHeader>
    <DialogTitle>فرم اجباری</DialogTitle>
    <DialogDescription>
      این فرم باید تکمیل شود
    </DialogDescription>
  </DialogHeader>
  {/* Form content */}
  <DialogFooter>
    <Button type="submit">ارسال</Button>
  </DialogFooter>
</DialogContent>`;
