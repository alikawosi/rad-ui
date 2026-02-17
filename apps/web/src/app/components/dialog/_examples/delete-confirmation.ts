export const code = `const [open, setOpen] = useState(false);
const [isDeleting, setIsDeleting] = useState(false);

const handleDelete = async () => {
  setIsDeleting(true);
  try {
    await deleteItem(itemId);
    setOpen(false);
    toast.success("آیتم با موفقیت حذف شد");
  } catch (error) {
    toast.error("خطا در حذف آیتم");
  } finally {
    setIsDeleting(false);
  }
};

<Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger asChild>
    <Button variant="destructive">حذف</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>آیا مطمئن هستید؟</DialogTitle>
      <DialogDescription>
        این عملیات غیرقابل بازگشت است.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline" disabled={isDeleting}>
          انصراف
        </Button>
      </DialogClose>
      <Button
        variant="destructive"
        onClick={handleDelete}
        disabled={isDeleting}
      >
        {isDeleting ? "در حال حذف..." : "حذف"}
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`;
