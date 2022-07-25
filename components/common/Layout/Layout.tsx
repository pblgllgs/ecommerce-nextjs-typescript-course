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

interface Props {
    children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <div className={s.root}>
            <main className="fit">{children}</main>;
        </div>
    );
};

export default Layout;
