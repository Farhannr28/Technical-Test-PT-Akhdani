import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { LayoutGrid } from 'lucide-react';
import AppLogo from './app-logo';
import { RoleEnum } from '@/types/role';
import useRoleNavItems from "@/hooks/use-filter-nav-role";

const ALL_NAV_ITEMS: NavItem[] = [
    {
        title: 'Perdinku',
        href: '/pegawai/perdinku',
        icon: LayoutGrid,
        role: RoleEnum.PEGAWAI,
    },
    {
        title: 'Pengajuan Perdin',
        href: '/sdm/pengajuan',
        icon: LayoutGrid,
        role: RoleEnum.SDM,
    },
    {
        title: 'Master Data Kota',
        href: '/kota-master',
        icon: LayoutGrid,
        role: [RoleEnum.SDM, RoleEnum.ADMIN],
    },
    {
        title: 'Atur Role User',
        href: '/atur-role',
        icon: LayoutGrid,
        role: [RoleEnum.ADMIN],
    },
];

export function AppSidebar() {

    const { auth } = usePage().props as { auth: { user: { role: RoleEnum } } };
    const role = auth.user?.role;

    let dashboardLink = '/dashboard'; // fallback default

    switch (role) {
        case 'ADMIN':
            dashboardLink = '/admin/dashboard';
            break;
        case 'PEGAWAI':
            dashboardLink = '/pegawai/dashboard';
            break;
        case 'SDM':
            dashboardLink = '/sdm/dashboard';
            break;
    }

    const mainNavItems = useRoleNavItems(ALL_NAV_ITEMS);
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboardLink} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
