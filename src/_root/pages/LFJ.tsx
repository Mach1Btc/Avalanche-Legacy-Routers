import { AAdsComponent, LFJSwapPanel, RouterSelecter } from '@/components/shared';
import { Helmet } from 'react-helmet-async';

const LFJ = () => {
    return (
        <>
            <Helmet>
                <title>LFJ v1 - Legacy Routers</title>
                <meta name="description" content="Interact with the LFJ v1 legacy router on Avalanche." />
            </Helmet>
            <div className="flex flex-col items-center w-full h-full overflow-y-auto">
                <RouterSelecter />
                <div className="flex flex-col w-4/5 xl:w-3/4 h-full gap-4 items-center justify-center">
                    <LFJSwapPanel />
                </div>
                <AAdsComponent />
            </div>
        </>
    )
};

export default LFJ;