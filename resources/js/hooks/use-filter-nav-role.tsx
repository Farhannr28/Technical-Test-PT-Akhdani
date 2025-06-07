import { NavItem } from "@/types";
import { RoleEnum } from "@/types/role";
import { usePage } from '@inertiajs/react';

export default function useRoleNavItems(ALL_NAV_ITEMS : NavItem[]) {
  const { auth } = usePage().props as { auth: { user: { role: RoleEnum } } };
  const role = auth.user?.role;
  
  return ALL_NAV_ITEMS.filter(item => {
    if (!item.role) return true;
    return item.role.includes(role);
  });
}