import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <AppShell>
      <section className="space-y-8">
        <div className="space-y-4">
          <p className="inline-flex rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            Shared Bangla Academy Frontend Baseline
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Build your team module on one consistent design system.
          </h1>
          <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
            Replace this page with your module dashboard. Keep existing tokens,
            shell layout, and reusable UI components so all 16 modules feel like
            one integrated government service product.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <article className="rounded-lg border border-border bg-muted/45 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              UI Baseline
            </p>
            <p className="mt-2 text-sm text-foreground/90">
              Reuse shared components and tokens for a consistent interface.
            </p>
          </article>
          <article className="rounded-lg border border-border bg-muted/45 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Accessibility
            </p>
            <p className="mt-2 text-sm text-foreground/90">
              Keep keyboard support, semantic structure, and clear contrast.
            </p>
          </article>
          <article className="rounded-lg border border-border bg-muted/45 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Integration
            </p>
            <p className="mt-2 text-sm text-foreground/90">
              Keep contracts stable and endpoints under your assigned namespace.
            </p>
          </article>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button>Primary Action</Button>
          <Button variant="outline">Secondary Action</Button>
        </div>
      </section>
    </AppShell>
  );
}
