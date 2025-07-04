import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';
import { RoleEnum } from './role';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
    role: RoleEnum | RoleEnum[];
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    avatar?: string;
    created_at: string;
    updated_at: string;
    role: RoleEnum;
    [key: string]: unknown;
}
