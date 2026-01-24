"use client";

import { useState } from "react";
import { Checkbox, Label } from "@rad-ui/ui";

export default function CheckboxPage() {
  const [singleChecked, setSingleChecked] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
  });

  return (
    <div className="container mx-auto p-8 max-w-6xl" dir="rtl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">چک‌باکس</h1>
        <p className="text-lg text-muted-foreground" dir="ltr">
          Checkbox
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          کامپوننت چک‌باکس برای انتخاب یک یا چند گزینه از مجموعه‌ای از انتخاب‌ها استفاده می‌شود. از این کامپوننت در فرم‌ها، تنظیمات و فیلترها استفاده کنید.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 pb-2 border-b">نصب و راه‌اندازی</h2>
        <div className="bg-muted/50 p-6 rounded-lg" dir="ltr">
          <pre className="text-sm">
            <code>{`npm install @radix-ui/react-checkbox`}</code>
          </pre>
        </div>
      </section>

      {/* Basic Usage */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">استفاده ساده</h2>
        <div className="space-y-6">
          <div className="p-8 border rounded-lg bg-card">
            <div className="flex items-center space-x-2 space-x-reverse">
              <Checkbox id="basic" />
              <Label htmlFor="basic" className="cursor-pointer">
                پذیرفتن قوانین و مقررات
              </Label>
            </div>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg" dir="ltr">
            <pre className="text-sm">
              <code>{`import { Checkbox, Label } from "@rad-ui/ui";

export function CheckboxDemo() {
  return (
    <div className="flex items-center space-x-2 space-x-reverse">
      <Checkbox id="basic" />
      <Label htmlFor="basic">پذیرفتن قوانین و مقررات</Label>
    </div>
  );
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* With Label */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">همراه با برچسب</h2>
        <div className="space-y-6">
          <div className="p-8 border rounded-lg bg-card">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 space-x-reverse">
                <Checkbox id="terms1" />
                <Label htmlFor="terms1" className="cursor-pointer">
                  قوانین و مقررات را می‌پذیرم
                </Label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <Checkbox id="marketing" />
                <Label htmlFor="marketing" className="cursor-pointer">
                  از ارسال ایمیل‌های تبلیغاتی مطلع باشم
                </Label>
              </div>
            </div>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg" dir="ltr">
            <pre className="text-sm">
              <code>{`<div className="space-y-4">
  <div className="flex items-center space-x-2 space-x-reverse">
    <Checkbox id="terms1" />
    <Label htmlFor="terms1">قوانین و مقررات را می‌پذیرم</Label>
  </div>
  <div className="flex items-center space-x-2 space-x-reverse">
    <Checkbox id="marketing" />
    <Label htmlFor="marketing">از ارسال ایمیل‌های تبلیغاتی مطلع باشم</Label>
  </div>
</div>`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Controlled */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">کنترل‌شده</h2>
        <div className="space-y-6">
          <div className="p-8 border rounded-lg bg-card">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 space-x-reverse">
                <Checkbox
                  id="controlled"
                  checked={singleChecked}
                  onCheckedChange={(checked) => setSingleChecked(checked as boolean)}
                />
                <Label htmlFor="controlled" className="cursor-pointer">
                  این چک‌باکس کنترل‌شده است
                </Label>
              </div>
              <p className="text-sm text-muted-foreground">
                وضعیت: {singleChecked ? "انتخاب شده" : "انتخاب نشده"}
              </p>
            </div>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg" dir="ltr">
            <pre className="text-sm">
              <code>{`const [checked, setChecked] = useState(false);

<div className="flex items-center space-x-2 space-x-reverse">
  <Checkbox
    id="controlled"
    checked={checked}
    onCheckedChange={(checked) => setChecked(checked)}
  />
  <Label htmlFor="controlled">این چک‌باکس کنترل‌شده است</Label>
</div>
<p>وضعیت: {checked ? "انتخاب شده" : "انتخاب نشده"}</p>`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Disabled */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">غیرفعال</h2>
        <div className="space-y-6">
          <div className="p-8 border rounded-lg bg-card">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 space-x-reverse">
                <Checkbox id="disabled1" disabled />
                <Label htmlFor="disabled1" className="cursor-not-allowed opacity-50">
                  چک‌باکس غیرفعال (انتخاب نشده)
                </Label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <Checkbox id="disabled2" disabled checked />
                <Label htmlFor="disabled2" className="cursor-not-allowed opacity-50">
                  چک‌باکس غیرفعال (انتخاب شده)
                </Label>
              </div>
            </div>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg" dir="ltr">
            <pre className="text-sm">
              <code>{`<div className="space-y-4">
  <div className="flex items-center space-x-2 space-x-reverse">
    <Checkbox id="disabled1" disabled />
    <Label htmlFor="disabled1">چک‌باکس غیرفعال (انتخاب نشده)</Label>
  </div>
  <div className="flex items-center space-x-2 space-x-reverse">
    <Checkbox id="disabled2" disabled checked />
    <Label htmlFor="disabled2">چک‌باکس غیرفعال (انتخاب شده)</Label>
  </div>
</div>`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Form Example */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">مثال فرم</h2>
        <div className="space-y-6">
          <div className="p-8 border rounded-lg bg-card">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">تنظیمات اعلان‌ها</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox
                      id="email-notif"
                      checked={notifications.email}
                      onCheckedChange={(checked) =>
                        setNotifications((prev) => ({
                          ...prev,
                          email: checked as boolean,
                        }))
                      }
                    />
                    <div className="flex flex-col">
                      <Label htmlFor="email-notif" className="cursor-pointer">
                        اعلان‌های ایمیل
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        دریافت اعلان‌ها از طریق ایمیل
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox
                      id="sms-notif"
                      checked={notifications.sms}
                      onCheckedChange={(checked) =>
                        setNotifications((prev) => ({
                          ...prev,
                          sms: checked as boolean,
                        }))
                      }
                    />
                    <div className="flex flex-col">
                      <Label htmlFor="sms-notif" className="cursor-pointer">
                        اعلان‌های پیامکی
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        دریافت اعلان‌ها از طریق پیامک
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox
                      id="push-notif"
                      checked={notifications.push}
                      onCheckedChange={(checked) =>
                        setNotifications((prev) => ({
                          ...prev,
                          push: checked as boolean,
                        }))
                      }
                    />
                    <div className="flex flex-col">
                      <Label htmlFor="push-notif" className="cursor-pointer">
                        اعلان‌های فشاری
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        دریافت اعلان‌های فشاری در مرورگر
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t">
                <h4 className="text-sm font-semibold mb-2">تنظیمات فعلی:</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>ایمیل: {notifications.email ? "فعال" : "غیرفعال"}</p>
                  <p>پیامک: {notifications.sms ? "فعال" : "غیرفعال"}</p>
                  <p>اعلان فشاری: {notifications.push ? "فعال" : "غیرفعال"}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg" dir="ltr">
            <pre className="text-sm overflow-x-auto">
              <code>{`const [notifications, setNotifications] = useState({
  email: true,
  sms: false,
  push: true,
});

<div className="space-y-4">
  <div className="flex items-center space-x-2 space-x-reverse">
    <Checkbox
      id="email-notif"
      checked={notifications.email}
      onCheckedChange={(checked) =>
        setNotifications((prev) => ({ ...prev, email: checked }))
      }
    />
    <div className="flex flex-col">
      <Label htmlFor="email-notif">اعلان‌های ایمیل</Label>
      <p className="text-sm text-muted-foreground">
        دریافت اعلان‌ها از طریق ایمیل
      </p>
    </div>
  </div>
  {/* ... similar for other options */}
</div>`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Terms Acceptance */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">پذیرش قوانین</h2>
        <div className="space-y-6">
          <div className="p-8 border rounded-lg bg-card">
            <div className="space-y-4">
              <div className="flex items-start space-x-2 space-x-reverse">
                <Checkbox
                  id="terms"
                  checked={termsAccepted}
                  onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
                  className="mt-1"
                />
                <div className="flex flex-col">
                  <Label htmlFor="terms" className="cursor-pointer">
                    قوانین و مقررات را مطالعه کرده و می‌پذیرم
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    با ثبت‌نام، شما{" "}
                    <a href="#" className="text-primary hover:underline">
                      شرایط استفاده
                    </a>{" "}
                    و{" "}
                    <a href="#" className="text-primary hover:underline">
                      سیاست حفظ حریم خصوصی
                    </a>{" "}
                    ما را می‌پذیرید
                  </p>
                </div>
              </div>
              <button
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!termsAccepted}
              >
                ادامه ثبت‌نام
              </button>
            </div>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg" dir="ltr">
            <pre className="text-sm overflow-x-auto">
              <code>{`const [termsAccepted, setTermsAccepted] = useState(false);

<div className="space-y-4">
  <div className="flex items-start space-x-2 space-x-reverse">
    <Checkbox
      id="terms"
      checked={termsAccepted}
      onCheckedChange={(checked) => setTermsAccepted(checked)}
      className="mt-1"
    />
    <div className="flex flex-col">
      <Label htmlFor="terms">قوانین و مقررات را مطالعه کرده و می‌پذیرم</Label>
      <p className="text-sm text-muted-foreground">
        با ثبت‌نام، شما شرایط استفاده و سیاست حفظ حریم خصوصی ما را می‌پذیرید
      </p>
    </div>
  </div>
  <button disabled={!termsAccepted}>ادامه ثبت‌نام</button>
</div>`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">مرجع API</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-right p-3 font-semibold">ویژگی</th>
                <th className="text-right p-3 font-semibold">نوع</th>
                <th className="text-right p-3 font-semibold">پیش‌فرض</th>
                <th className="text-right p-3 font-semibold">توضیحات</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm" dir="ltr">
                  checked
                </td>
                <td className="p-3 font-mono text-sm" dir="ltr">
                  boolean
                </td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3">وضعیت انتخاب چک‌باکس (کنترل‌شده)</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm" dir="ltr">
                  defaultChecked
                </td>
                <td className="p-3 font-mono text-sm" dir="ltr">
                  boolean
                </td>
                <td className="p-3 font-mono text-sm" dir="ltr">
                  false
                </td>
                <td className="p-3">وضعیت اولیه چک‌باکس (غیرکنترل‌شده)</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm" dir="ltr">
                  onCheckedChange
                </td>
                <td className="p-3 font-mono text-sm" dir="ltr">
                  (checked: boolean) =&gt; void
                </td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3">تابع فراخوانی شده هنگام تغییر وضعیت</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm" dir="ltr">
                  disabled
                </td>
                <td className="p-3 font-mono text-sm" dir="ltr">
                  boolean
                </td>
                <td className="p-3 font-mono text-sm" dir="ltr">
                  false
                </td>
                <td className="p-3">غیرفعال کردن چک‌باکس</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm" dir="ltr">
                  required
                </td>
                <td className="p-3 font-mono text-sm" dir="ltr">
                  boolean
                </td>
                <td className="p-3 font-mono text-sm" dir="ltr">
                  false
                </td>
                <td className="p-3">الزامی بودن چک‌باکس در فرم</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm" dir="ltr">
                  name
                </td>
                <td className="p-3 font-mono text-sm" dir="ltr">
                  string
                </td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3">نام چک‌باکس در فرم</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm" dir="ltr">
                  value
                </td>
                <td className="p-3 font-mono text-sm" dir="ltr">
                  string
                </td>
                <td className="p-3 font-mono text-sm" dir="ltr">
                  &quot;on&quot;
                </td>
                <td className="p-3">مقدار چک‌باکس هنگام ارسال فرم</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Accessibility */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">دسترسی‌پذیری</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            کامپوننت Checkbox از Radix UI استفاده می‌کند و دسترسی‌پذیری کامل را
            فراهم می‌آورد:
          </p>
          <ul className="list-disc list-inside space-y-2 mr-4">
            <li>پشتیبانی کامل از صفحه‌کلید (Space برای تغییر وضعیت)</li>
            <li>سازگاری با screen readers</li>
            <li>استفاده از ویژگی‌های ARIA مناسب</li>
            <li>
              استفاده از Label برای بهبود تجربه کاربری (کلیک روی متن چک‌باکس را
              فعال می‌کند)
            </li>
            <li>مدیریت وضعیت focus برای ناوبری با صفحه‌کلید</li>
            <li>پشتیبانی از ویژگی required در فرم‌ها</li>
          </ul>
        </div>
      </section>

      {/* Best Practices */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">بهترین روش‌ها</h2>
        <div className="space-y-4">
          <div className="p-6 border-r-4 border-green-500 bg-green-500/10 rounded">
            <h3 className="font-semibold mb-2 text-green-700 dark:text-green-400">
              ✓ انجام دهید
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• همیشه از Label همراه با Checkbox استفاده کنید</li>
              <li>• برچسب‌های واضح و مختصر بنویسید</li>
              <li>• برای انتخاب‌های مستقل از Checkbox استفاده کنید</li>
              <li>• در فرم‌ها از حالت کنترل‌شده استفاده کنید</li>
              <li>• توضیحات اضافی را در کنار چک‌باکس قرار دهید</li>
            </ul>
          </div>
          <div className="p-6 border-r-4 border-red-500 bg-red-500/10 rounded">
            <h3 className="font-semibold mb-2 text-red-700 dark:text-red-400">
              ✗ انجام ندهید
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                • برای انتخاب‌های انحصاری از Checkbox استفاده نکنید (از Radio
                استفاده کنید)
              </li>
              <li>• چک‌باکس را بدون برچسب رها نکنید</li>
              <li>• تعداد زیادی چک‌باکس را در یک گروه قرار ندهید</li>
              <li>• از چک‌باکس برای اقدامات فوری استفاده نکنید (از Switch استفاده کنید)</li>
              <li>• برچسب‌های مبهم و طولانی ننویسید</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">مثال کامل کد</h2>
        <div className="bg-muted/50 p-6 rounded-lg" dir="ltr">
          <pre className="text-sm overflow-x-auto">
            <code>{`import { useState } from "react";
import { Checkbox, Label } from "@rad-ui/ui";

export function CheckboxExample() {
  const [preferences, setPreferences] = useState({
    newsletter: false,
    updates: true,
    offers: false,
  });

  const handleChange = (key: string, value: boolean) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 space-x-reverse">
        <Checkbox
          id="newsletter"
          checked={preferences.newsletter}
          onCheckedChange={(checked) => handleChange("newsletter", checked)}
        />
        <Label htmlFor="newsletter">دریافت خبرنامه</Label>
      </div>
      <div className="flex items-center space-x-2 space-x-reverse">
        <Checkbox
          id="updates"
          checked={preferences.updates}
          onCheckedChange={(checked) => handleChange("updates", checked)}
        />
        <Label htmlFor="updates">اطلاع از به‌روزرسانی‌ها</Label>
      </div>
      <div className="flex items-center space-x-2 space-x-reverse">
        <Checkbox
          id="offers"
          checked={preferences.offers}
          onCheckedChange={(checked) => handleChange("offers", checked)}
        />
        <Label htmlFor="offers">دریافت پیشنهادات ویژه</Label>
      </div>
    </div>
  );
}`}</code>
          </pre>
        </div>
      </section>
    </div>
  );
}
