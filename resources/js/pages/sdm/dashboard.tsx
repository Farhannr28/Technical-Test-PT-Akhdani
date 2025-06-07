import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/admin/dashboard',
    },
];

export default function SDMDashboard() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
        <Head title="Dashboard" />
    </AppLayout>
  );
}
