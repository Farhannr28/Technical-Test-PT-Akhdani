import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

type City = {
  id: number;
  name: string;
  province: string;
  island: string;
  is_foreign: boolean;
  latitude: number;
  longitude: number;
};

type MasterKotaProps = {
  data: City[];
};

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Master Kota',
    href: '/admin/master-kota',
  },
];

export default function MasterDataKota({ data }: MasterKotaProps) {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Master Kota" />
      <div className="flex min-h-screen text-sm font-sans text-foreground bg-background">
        <main className="flex-1 p-8 bg-muted">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-serif font-semibold">Master Kota</h2>
          </div>

          <div className="bg-background text-foreground p-4 rounded-2xl">
            {/* Tambah Kota */}
            <div className="flex justify-end items-center p-4 pb-6">
              <Button variant="outline" className="px-4 py-1">
                + Tambah Kota
              </Button>
            </div>

            {/* Tabel Kota */}
            <div className="rounded-xl overflow-x-auto shadow border border-primary border-xs">
              <table className="w-full text-sm">
                <thead className="bg-muted text-muted-foreground">
                  <tr>
                    <th className="text-left px-6 py-3">#</th>
                    <th className="text-left px-6 py-3">Nama Kota</th>
                    <th className="text-left px-6 py-3">Provinsi</th>
                    <th className="text-left px-6 py-3">Pulau</th>
                    <th className="text-left px-6 py-3">Luar Negeri</th>
                    <th className="text-left px-6 py-3">Latitude</th>
                    <th className="text-left px-6 py-3">Longitude</th>
                    <th className="text-left px-6 py-3">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((city, index) => (
                    <tr key={city.id} className="border-t">
                      <td className="px-6 py-4">{index + 1}</td>
                      <td className="px-6 py-4">{city.name}</td>
                      <td className="px-6 py-4">{city.province}</td>
                      <td className="px-6 py-4">{city.island}</td>
                      <td className="px-6 py-4">{city.is_foreign ? 'Ya' : 'Tidak'}</td>
                      <td className="px-6 py-4">{city.latitude.toFixed(6)}</td>
                      <td className="px-6 py-4">{city.longitude.toFixed(6)}</td>
                      <td className="px-6 py-4 space-x-2">
                        <button className="text-orange-500 hover:text-orange-700">
                          ✏️
                        </button>
                        <button className="text-red-500 hover:text-red-700">
                          🗑️
                        </button>
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
