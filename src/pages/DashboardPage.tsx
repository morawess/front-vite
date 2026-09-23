import { AppShell } from "@/components/app-shell"
import { StatCards } from "@/components/dashboard/stat-cards"
import { QuickAccess } from "@/components/dashboard/quick-access"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { DashboardCharts } from "@/components/dashboard/dashboard-charts"

export default function DashboardPage() {
  return (
    <AppShell title="Inicio">
      <div className="flex w-full flex-col gap-6 2xl:mx-auto 2xl:max-w-screen-2xl">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Buenos días, Jere
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">Agosto 2025</p>
        </div>
        <StatCards />
        <QuickAccess />
        <RecentActivity />
        <DashboardCharts />
      </div>
    </AppShell>
  )
}
