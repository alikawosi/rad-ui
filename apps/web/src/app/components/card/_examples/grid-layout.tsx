"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/registry/web/ui";

export const code = `<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
  <Card>
    <CardHeader>
      <CardTitle>کارت اول</CardTitle>
    </CardHeader>
    <CardContent>محتوای کارت اول</CardContent>
  </Card>
  <Card>
    <CardHeader>
      <CardTitle>کارت دوم</CardTitle>
    </CardHeader>
    <CardContent>محتوای کارت دوم</CardContent>
  </Card>
  <Card>
    <CardHeader>
      <CardTitle>کارت سوم</CardTitle>
    </CardHeader>
    <CardContent>محتوای کارت سوم</CardContent>
  </Card>
</div>`;

export default function GridLayoutExample() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>کارت اول</CardTitle>
        </CardHeader>
        <CardContent>محتوای کارت اول</CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>کارت دوم</CardTitle>
        </CardHeader>
        <CardContent>محتوای کارت دوم</CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>کارت سوم</CardTitle>
        </CardHeader>
        <CardContent>محتوای کارت سوم</CardContent>
      </Card>
    </div>
  );
}
