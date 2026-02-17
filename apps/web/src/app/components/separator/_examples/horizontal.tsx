"use client";

import { Separator } from "@/registry/web/ui";

export const code = `import { Separator } from "@/components/ui/separator";

export default function HorizontalExample() {
  return (
    <div>
      <div>
        <h3 className="text-lg font-semibold">بخش اول</h3>
        <p className="text-muted-foreground">
          این محتوای بخش اول است که در بالا قرار دارد
        </p>
      </div>
      <Separator className="my-6" />
      <div>
        <h3 className="text-lg font-semibold">بخش دوم</h3>
        <p className="text-muted-foreground">
          این محتوای بخش دوم است که در پایین قرار دارد
        </p>
      </div>
    </div>
  );
}
`;

export default function HorizontalExample() {
  return (
    <div>
      <div>
        <h3 className="text-lg font-semibold">بخش اول</h3>
        <p className="text-muted-foreground">
          این محتوای بخش اول است که در بالا قرار دارد
        </p>
      </div>
      <Separator className="my-6" />
      <div>
        <h3 className="text-lg font-semibold">بخش دوم</h3>
        <p className="text-muted-foreground">
          این محتوای بخش دوم است که در پایین قرار دارد
        </p>
      </div>
    </div>
  );
}
