import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { PerdinData, StatusEnum } from '@/types/perdin';
import { PageProps } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Perdinku',
        href: '/pegawai/perdinku',
    },
];

const getStatusClasses = (status: StatusEnum) => {
  switch (status) {
    case StatusEnum.APPROVED:
      return 'bg-green-50 text-green-600 border-green-600';
    case StatusEnum.REJECTED:
      return 'bg-red-50 text-red-600 border-red-600';
    case StatusEnum.PENDING:
      return 'bg-yellow-50 text-yellow-600 border-yellow-600';
  }
};

type PegawaiDashboardProps = PageProps<{
  data: PerdinData[];
}>;

export default function PerdinDashboard({ data } : PegawaiDashboardProps) {

  console.log(data)

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
        <Head title="Dashboard" />
        <div className="flex min-h-screen text-sm font-sans text-foregorund bg-background">

          {/* Main content */}
          <main className="flex-1 p-8 bg-muted">

            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-serif font-semibold">Daftar Perdin</h2>
            </div>

            <div className="bg-background text-foreground p-4 rounded-2xl">
              <div className="flex justify-end items-center p-4 pb-6">
                <Button variant="outline" className="px-4 py-1">
                  + Tambah Perdin
                </Button>
              </div>

              {/* Card */}
              <div className="rounded-xl overflow-x-auto shadow border border-primary border-xs">
                <table className="w-full text-sm">
                  <thead className="bg-muted text-muted-foreground">
                    <tr>
                      <th className="text-left px-6 py-3">#</th>
                      <th className="text-left px-6 py-3">Kota</th>
                      <th className="text-left px-6 py-3">Tanggal</th>
                      <th className="text-left px-6 py-3">Keterangan</th>
                      <th className="text-left px-6 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item : PerdinData, index : number) => (
                      <tr key={item.id} className="border-t">
                        <td className="px-6 py-4">{index + 1}</td>
                        <td className="px-6 py-4">
                          <span> {item.from} <span className="mx-1">→</span> {item.to} </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className='flex flex-col'>
                            {item.date_from}{" - "}{item.date_until}
                            <span className="text-gray-400 text-xs">({item.duration} Hari)</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">{item.description}</td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-3 py-1 text-xs font-serif rounded-full border boder-xs ${
                              getStatusClasses(item.status)
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
    </AppLayout>
  );
}
