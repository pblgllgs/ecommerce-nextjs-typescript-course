import { FC } from 'react';

interface Props {
    children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
    return <div className="layout">{children}</div>;
};

export default Layout;
