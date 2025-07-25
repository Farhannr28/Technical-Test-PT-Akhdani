import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/pegawai/dashboard',
    },
];

export default function PerdinDashboard() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
        <Head title="Dashboard" />
    </AppLayout>
  );
}
