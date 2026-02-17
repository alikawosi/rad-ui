"use client";

import { Badge } from "@/registry/web/ui";

export const code = `import { Badge } from "@/components/ui/badge";

export default function CustomColorsExample() {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <Badge className="bg-blue-500 text-white hover:bg-blue-600">
        آبی
      </Badge>
      <Badge className="bg-green-500 text-white hover:bg-green-600">
        سبز
      </Badge>
      <Badge className="bg-purple-500 text-white hover:bg-purple-600">
        بنفش
      </Badge>
      <Badge className="bg-orange-500 text-white hover:bg-orange-600">
        نارنجی
      </Badge>
      <Badge className="bg-pink-500 text-white hover:bg-pink-600">
        صورتی
      </Badge>
      <Badge className="bg-yellow-500 text-gray-900 hover:bg-yellow-600">
        زرد
      </Badge>
    </div>
  );
}
`;

export default function CustomColorsExample() {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <Badge className="bg-blue-500 text-white hover:bg-blue-600">
        آبی
      </Badge>
      <Badge className="bg-green-500 text-white hover:bg-green-600">
        سبز
      </Badge>
      <Badge className="bg-purple-500 text-white hover:bg-purple-600">
        بنفش
      </Badge>
      <Badge className="bg-orange-500 text-white hover:bg-orange-600">
        نارنجی
      </Badge>
      <Badge className="bg-pink-500 text-white hover:bg-pink-600">
        صورتی
      </Badge>
      <Badge className="bg-yellow-500 text-gray-900 hover:bg-yellow-600">
        زرد
      </Badge>
    </div>
  );
}
