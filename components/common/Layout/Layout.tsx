import { FC, ReactNode } from 'react';
import s from './Layout.module.css';
import { Footer, Navbar } from '@components/common';
import { CartSidebar } from '@components/cart';
import { useUI } from '@components/ui/context';
import Sidebar from '../../ui/Sidebar/Sidebar';

interface Props {
    children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
    const { isSidebarOpen, closeSidebar } = useUI();
    return (
        <div className={s.root}>
            <Navbar />
            <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar}>
                <CartSidebar />
            </Sidebar>
            <main className="fit">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
