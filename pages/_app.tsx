import { AppProps } from 'next/app';
import '@assets/main.css';
import 'keen-slider/keen-slider.min.css';
import { UIProvider } from '@components/ui/context';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <UIProvider>
                <Component {...pageProps} />
            </UIProvider>
        </>
    );
}

export default MyApp;
