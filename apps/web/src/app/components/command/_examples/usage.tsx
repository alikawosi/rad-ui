"use client";

export const code = `import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

// استفاده inline
<Command className="max-w-sm rounded-lg border">
  <CommandInput placeholder="جستجو..." />
  <CommandList>
    <CommandEmpty>نتیجه‌ای یافت نشد.</CommandEmpty>
    <CommandGroup heading="گروه ۱">
      <CommandItem value="item-1">آیتم ۱</CommandItem>
      <CommandItem value="item-2">آیتم ۲</CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="گروه ۲">
      <CommandItem value="item-3" onSelect={() => console.log("selected")}>
        آیتم ۳
        <CommandShortcut>⌘K</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>

// استفاده به صورت Command Palette (دیالوگ)
const [open, setOpen] = useState(false);

<CommandDialog open={open} onOpenChange={setOpen}>
  <CommandInput placeholder="جستجو برای دستور..." />
  <CommandList>
    <CommandEmpty>نتیجه‌ای یافت نشد.</CommandEmpty>
    <CommandGroup heading="دستورات">
      <CommandItem onSelect={() => setOpen(false)}>بستن</CommandItem>
    </CommandGroup>
  </CommandList>
</CommandDialog>`;
