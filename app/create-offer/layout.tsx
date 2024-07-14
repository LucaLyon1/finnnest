'use client';

import { TestProvider } from "@/lib/testContext";

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <TestProvider>
            {children}
        </TestProvider>
    );
}

export default Layout;