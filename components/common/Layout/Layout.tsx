// import { FC } from 'react';

// interface Props {
//     children: React.ReactNode;
//     CSS: string;
// }

// const Layout: FC<Props> = ({ children,CSS }) => {
//     return <div className={CSS}>{children}</div>;
// };

// export default Layout;

import { FC } from 'react';
import s from './Layout.module.css';
import { Footer, Navbar } from '@components/common';

interface Props {
    children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <div className={s.root}>
            <Navbar />
            <main className="fit">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
