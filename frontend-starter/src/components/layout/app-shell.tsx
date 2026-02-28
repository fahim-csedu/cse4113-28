import Link from "next/link";
import { BookOpen, LayoutDashboard } from "lucide-react";

import { primaryNav } from "@/config/navigation";

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  const teamCode = process.env.NEXT_PUBLIC_TEAM_CODE ?? "TXX";

  return (
    <div className="min-h-screen bg-transparent text-foreground">
      <header className="sticky top-0 z-20 border-b border-border/80 bg-card/90 shadow-sm backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 font-semibold tracking-tight">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-muted text-primary">
              <BookOpen className="h-4 w-4" />
            </div>
            <span className="text-base sm:text-lg">Bangla Academy</span>
          </div>
          <div className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
            Team {teamCode}
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 py-6 sm:px-6 lg:grid-cols-[250px_1fr] lg:px-8 lg:py-8">
        <aside className="rounded-xl border border-border/90 bg-card/95 p-3 shadow-sm">
          <div className="mb-2 flex items-center gap-2 px-2 text-sm font-semibold text-muted-foreground">
            <LayoutDashboard className="h-4 w-4" />
            Navigation
          </div>
          <nav className="space-y-1">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-md px-2 py-2 text-sm text-foreground/90 transition-colors hover:bg-accent/90 hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        <main className="rounded-xl border border-border/90 bg-card/95 p-5 shadow-sm sm:p-7">
          {children}
        </main>
      </div>
    </div>
  );
}
