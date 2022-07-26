import cn from 'classnames';
import { FC } from 'react';
import s from './Grid.module.css';

interface Props {
    children: React.ReactNode[];
    layout?: 'A' | 'B';
}

const Grid: FC<Props> = ({ children, layout = "A" }) => {
    const rootClassName = cn(s.root, {
        [s.layoutA]: layout === 'A',
        [s.layoutB]: layout === 'B',
    });
    return <div className={rootClassName}>{children}</div>;
};

export default Grid;
