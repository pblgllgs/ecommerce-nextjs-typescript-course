import { AppProps } from 'next/app';
import '@assets/main.css';
import { UIProvider } from '@components/ui/context';
import { useUI } from '@components/ui/context';

function MyApp({ Component, pageProps }: AppProps) {
    const ui = useUI();
    console.log(ui);
    return (
        <>
            <UIProvider>
                <Component {...pageProps} />
            </UIProvider>
        </>
    );
}

export default MyApp;
