import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { type PropsWithChildren } from 'react';

export default function AuthCardLayout({
    children,
    title,
    description,
}: PropsWithChildren<{
    name?: string;
    title?: string;
    description?: string;
}>) {

    return (
        <div>
            <CardHeader className="px-10 pt-8 pb-0 text-center">
                <CardTitle className="text-3xl font-serif">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="px-10 py-8">{children}</CardContent>
        </div>
    );
}
