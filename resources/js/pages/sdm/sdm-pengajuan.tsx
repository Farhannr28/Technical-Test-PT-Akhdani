import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { PerdinData, StatusEnum } from '@/types/perdin';
import { PageProps } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import PengajuanToggle from '@/components/PengajuanToggle';
import { useState } from 'react';
import PerdinBaru from './perdin-baru';
import PerdinHistory from './perdin-history';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Pengajuan',
        href: '/pegawai/pengajuan',
    },
];

export type PengajuanPerdinProps = PageProps<{
  data: PerdinData[];
}>;

export default function PengajuanPerdin({ data } : PengajuanPerdinProps) {

const [mode, setMode] = useState<'baru' | 'history'>('baru');

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
        <Head title="Dashboard" />
        <div className="flex min-h-screen text-sm font-sans text-foregorund bg-background">

          {/* Main content */}
          <main className="flex-1 p-8 bg-muted">

            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-serif font-semibold">Pengajuan Perdin</h2>
            </div>

            <div className="bg-background text-foreground p-4 rounded-2xl">
              <div className="flex justify-end items-center p-4 pb-6">
                <PengajuanToggle
                    mode={mode}
                    onToggle={() => setMode((prev) => (prev === 'baru' ? 'history' : 'baru'))}
                />
              </div>
                {mode === 'baru' ? (
                <PerdinBaru data={data.filter(item => item.status === StatusEnum.PENDING)} />
                ) : (
                <PerdinHistory data={data} />
                )}
            </div>
          </main>
        </div>
    </AppLayout>
  );
}
