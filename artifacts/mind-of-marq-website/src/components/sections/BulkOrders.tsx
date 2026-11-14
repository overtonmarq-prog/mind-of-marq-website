import { useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, FileText, Package, RotateCcw } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { editionOptions } from "@/data/catalog";

/**
 * Bulk Orders & Classroom Licenses.
 * Both actions submit through the existing "educator-request" Netlify form,
 * tagged with `inquiry` so they can be told apart in the Forms dashboard.
 */

type Kind = "bulk-print-quote" | "classroom-pdf-license";
type Status = "idle" | "submitting" | "success" | "error";

const KINDS: Record<Kind, { label: string; inquiry: string; icon: typeof Package; blurb: string }> = {
  "bulk-print-quote": {
    label: "Request a Bulk Print Quote",
    inquiry: "Bulk Print Quote",
    icon: Package,
    blurb:
      "Print copies for a classroom, daycare, library, or event. We confirm production and shipping costs, then send you a quote.",
  },
  "classroom-pdf-license": {
    label: "Request a Classroom PDF License",
    inquiry: "Classroom PDF License",
    icon: FileText,
    blurb:
      "Permission to print and share a PDF edition across your classrooms or sites. Tell us how many will use it and we'll send license terms.",
  },
};

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");

const empty = {
  name: "",
  email: "",
  phone: "",
  school: "",
  edition: "",
  quantity: "",
  zip: "",
  deliveryDate: "",
  classrooms: "",
  message: "",
};

const selectCls =
  "w-full border border-input bg-background px-4 py-3 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30";
const labelCls = "mb-2 block text-sm font-semibold text-foreground";

export function BulkOrders() {
  const [kind, setKind] = useState<Kind>("bulk-print-quote");
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<Status>("idle");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async () => {
    setStatus("submitting");
    const isQuote = kind === "bulk-print-quote";
    const payload: Record<string, string> = {
      "form-name": "educator-request",
      "bot-field": "",
      inquiry: KINDS[kind].inquiry,
      interest: KINDS[kind].inquiry,
      name: form.name,
      email: form.email,
      phone: form.phone,
      school: form.school,
      edition: form.edition,
      message: form.message,
      ...(isQuote
        ? { quantity: form.quantity, zip: form.zip, deliveryDate: form.deliveryDate }
        : { classrooms: form.classrooms }),
    };
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    void submit();
  };

  const switchKind = (k: Kind) => {
    setKind(k);
    setStatus("idle");
  };

  const startOver = () => {
    setForm(empty);
    setStatus("idle");
  };

  const isQuote = kind === "bulk-print-quote";
  const today = new Date().toISOString().slice(0, 10);

  return (
    <section id="bulk-orders" className="scroll-mt-24 py-24 bg-white border-b border-border/40">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">
            Schools &amp; Libraries
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-5 leading-tight">
            Bulk Orders &amp; Classroom Licenses
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
            Ordering for a classroom, daycare, library, or event? Request a quote for print copies, or a
            license to use a PDF edition across your classrooms or sites.
          </p>
        </motion.div>

        {/* Two actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8" role="tablist">
          {(Object.keys(KINDS) as Kind[]).map((k) => {
            const { label, icon: Icon, blurb } = KINDS[k];
            const active = kind === k;
            return (
              <button
                key={k}
                type="button"
                role="tab"
                aria-selected={active}
                aria-controls="bulk-form"
                data-testid={`action-${k}`}
                onClick={() => switchKind(k)}
                className={`text-left rounded-2xl border-2 p-5 transition-colors ${
                  active ? "border-primary bg-primary/5" : "border-border/60 bg-white hover:border-primary/40"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Icon className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-foreground">{label}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{blurb}</p>
              </button>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto" id="bulk-form" role="tabpanel">
          {status === "success" ? (
            <div
              role="status"
              data-testid="bulk-success"
              className="bg-white rounded-2xl p-10 text-center border border-border/60"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            >
              <CheckCircle2 className="w-14 h-14 text-primary mx-auto mb-5" />
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                {isQuote ? "Quote request received" : "License request received"}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Thank you. We'll reply to {form.email || "you"} within two business days
                {isQuote ? " with a quote that includes production and shipping." : " with license terms and pricing."}
              </p>
              <button
                type="button"
                onClick={startOver}
                className="text-primary font-semibold text-sm hover:underline"
              >
                Send another request
              </button>
            </div>
          ) : (
            <form
              name="educator-request"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-border/60 space-y-5"
              style={{ boxShadow: "var(--shadow-elegant)" }}
              data-testid={`form-${kind}`}
            >
              <h3 className="font-serif text-2xl font-bold text-foreground">{KINDS[kind].label}</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="bo-name" className={labelCls}>Full Name *</Label>
                  <Input id="bo-name" name="name" required autoComplete="name" value={form.name} onChange={onChange} className="rounded-xl" />
                </div>
                <div>
                  <Label htmlFor="bo-email" className={labelCls}>Email *</Label>
                  <Input id="bo-email" name="email" type="email" required autoComplete="email" placeholder="name@school.org" value={form.email} onChange={onChange} className="rounded-xl" />
                </div>
                <div>
                  <Label htmlFor="bo-phone" className={labelCls}>Phone</Label>
                  <Input id="bo-phone" name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={onChange} className="rounded-xl" />
                </div>
                <div>
                  <Label htmlFor="bo-org" className={labelCls}>Organization *</Label>
                  <Input id="bo-org" name="school" required autoComplete="organization" placeholder="School, daycare, library, or event" value={form.school} onChange={onChange} className="rounded-xl" />
                </div>
              </div>

              <div>
                <Label htmlFor="bo-edition" className={labelCls}>Book Edition *</Label>
                <select id="bo-edition" name="edition" required value={form.edition} onChange={onChange} className={selectCls}>
                  <option value="" disabled>Choose an edition</option>
                  {editionOptions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                  <option value="Multiple editions (see notes)">Multiple editions (see notes)</option>
                </select>
              </div>

              {isQuote ? (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <Label htmlFor="bo-qty" className={labelCls}>Quantity *</Label>
                    <Input id="bo-qty" name="quantity" type="number" inputMode="numeric" min={1} required value={form.quantity} onChange={onChange} className="rounded-xl" />
                  </div>
                  <div>
                    <Label htmlFor="bo-zip" className={labelCls}>Delivery ZIP Code *</Label>
                    <Input id="bo-zip" name="zip" required inputMode="numeric" autoComplete="postal-code" pattern="\d{5}(-\d{4})?" title="5-digit ZIP code" value={form.zip} onChange={onChange} className="rounded-xl" />
                  </div>
                  <div>
                    <Label htmlFor="bo-date" className={labelCls}>Requested Delivery Date *</Label>
                    <Input id="bo-date" name="deliveryDate" type="date" min={today} required value={form.deliveryDate} onChange={onChange} className="rounded-xl" />
                  </div>
                </div>
              ) : (
                <div>
                  <Label htmlFor="bo-classrooms" className={labelCls}>Number of classrooms or sites using the PDF *</Label>
                  <Input id="bo-classrooms" name="classrooms" type="number" inputMode="numeric" min={1} required value={form.classrooms} onChange={onChange} className="rounded-xl sm:max-w-xs" />
                </div>
              )}

              <div>
                <Label htmlFor="bo-message" className={labelCls}>Notes</Label>
                <Textarea id="bo-message" name="message" placeholder="Anything else we should know" value={form.message} onChange={onChange} className="rounded-xl min-h-[96px]" />
              </div>

              {status === "error" && (
                <div role="alert" data-testid="bulk-error" className="flex flex-col sm:flex-row sm:items-center gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <p className="flex-1">Your request didn't go through. Your details are still here. Please try again.</p>
                  <button
                    type="button"
                    onClick={() => void submit()}
                    className="inline-flex items-center gap-1.5 font-semibold text-red-700 hover:underline"
                  >
                    <RotateCcw className="w-4 h-4" /> Retry
                  </button>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-primary hover:bg-primary/90 disabled:opacity-60 text-white font-semibold py-4 rounded-full transition-colors shadow-md text-base"
              >
                {status === "submitting" ? "Sending..." : KINDS[kind].label}
              </button>
              <p className="text-xs text-muted-foreground text-center">
                We respond to all school and library requests within two business days.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
