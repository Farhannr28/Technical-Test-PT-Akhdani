import { useState } from 'react';
import Login from '@/pages/auth/login';
import Register from '@/pages/auth/register';
import AuthToggle from '@/components/AuthToggle';
import AppLogoIcon from '@/components/app-logo-icon';
import ThemeToggle from '@/components/theme-toggle';
import { Link } from '@inertiajs/react';
import { Card } from '@/components/ui/card';

export default function Index() {
    const [mode, setMode] = useState<'login' | 'signup'>('login');

    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
            <div className="flex w-full max-w-md flex-col gap-4">
                <Link href={route('home')} className="flex items-center gap-2 self-center font-medium">
                    <div className="flex h-12 w-12 items-center justify-center">
                        <AppLogoIcon className="size-12 fill-current text-black dark:text-white" />
                    </div>
                </Link>

                <div className="flex flex-col gap-6">
                    <Card className="rounded-xl min-h-[569px]">
                        <AuthToggle
                            mode={mode}
                            onToggle={() => setMode((prev) => (prev === 'login' ? 'signup' : 'login'))}
                        />
                        {mode === 'login' ? <Login canResetPassword={true} /> : <Register />}
                    </Card>
                </div>
            </div>
            <ThemeToggle />
        </div>
    );
}
