import { defineStore } from "pinia";
import { nanoid } from "nanoid";

import type { WidgetOptions } from "@/types/local/WidgetOptions";

interface DashboardStoreState {
    dashboard: WidgetOptions[];
}

const defaultDashboard: WidgetOptions[] = [
    {
        id: nanoid(),
        type: "InvitesTotal",
        grid: { w: 2, h: 2 },
    },
    {
        id: nanoid(),
        type: "UsersTotal",
        grid: { w: 2, h: 2 },
    },
    {
        id: nanoid(),
        type: "TasksTotal",
        grid: { w: 2, h: 2 },
    },
    {
        id: nanoid(),
        type: "UsersGraph",
        grid: { w: 3, h: 4 },
    },
    {
        id: nanoid(),
        type: "InvitesGraph",
        grid: { w: 3, h: 4 },
    },
];

export const useDashboardStore = defineStore("dashboard", {
    state: (): DashboardStoreState => ({
        dashboard: defaultDashboard,
    }),
    actions: {
        resetDashboard() {
            this.dashboard = defaultDashboard;
        },
        updateWidget(widget: WidgetOptions) {
            const index = this.dashboard.findIndex((w) => w.id === widget.id);
            this.dashboard[index] = widget;
        },
        deleteWidget(id: string) {
            const index = this.dashboard.findIndex((w) => w.id === id);
            this.dashboard.splice(index, 1);
        },
    },
    persist: true,
});
