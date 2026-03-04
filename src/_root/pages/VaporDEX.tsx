import { VaporDEXSwapPanel, RouterSelecter, AAdsComponent } from '@/components/shared';
import { Helmet } from 'react-helmet-async';

const VaporDEX = () => {
    return (
        <>
            <Helmet>
                <title>VaporDEX - Legacy Routers</title>
                <meta name="description" content="Interact with the VaporDEX legacy router on Avalanche." />
            </Helmet>
            <div className="flex flex-col items-center w-full h-full overflow-y-auto">
                <RouterSelecter />
                <div className="flex flex-col w-4/5 xl:w-3/4 h-full gap-4 items-center justify-center">
                    <VaporDEXSwapPanel />
                </div>
                <AAdsComponent />
            </div>
        </>
    )
};

export default VaporDEX;