import { PerdinData } from '@/types/perdin';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';
import { PengajuanPerdinProps } from './sdm-pengajuan';

export default function PerdinBaru({data} : PengajuanPerdinProps) {

    console.log(data);

  return (
  <div className="rounded-xl overflow-x-auto shadow border border-primary border-xs">
        <table className="w-full text-sm">
        <thead className="bg-muted text-muted-foreground">
            <tr>
            <th className="text-left px-6 py-3">#</th>
            <th className="text-left px-6 py-3">Kota</th>
            <th className="text-left px-6 py-3">Tanggal</th>
            <th className="text-left px-6 py-3">Keterangan</th>
            <th className="text-left px-6 py-3">Aksi</th>
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
                <Button variant="outline" size="icon">
                    <Eye className="h-4 w-4" />
                </Button>
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
  );
}
