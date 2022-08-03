import { FC, ReactNode } from 'react';
import s from './Layout.module.css';
import { Footer, Navbar } from '@components/common';
import { CartSidebar } from '@components/cart';
import { useUI } from '@components/ui/context';
import { Sidebar } from '@components/ui';
import { ApiProvider } from '@framework';

interface Props {
    children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
    const { isSidebarOpen, closeSidebar } = useUI();
    return (
        <ApiProvider>
            <div className={s.root}>
                <Navbar />
                <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar}>
                    <CartSidebar />
                </Sidebar>
                <main className="fit">{children}</main>
                <Footer />
            </div>
        </ApiProvider>
    );
};

export default Layout;
