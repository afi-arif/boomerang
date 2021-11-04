import { useState, useEffect } from 'react';
const path = "/src/assets/images/";

interface PropsPath {
    root: string;
}


export const useWindowDimensions = (slideName: string): PropsPath => {

    const [sourcePath, setSourcePath] = useState<PropsPath>({ root: path });

    useEffect(() => {

        const handleSourcePath = () => {
            const { width } = { width: window.innerWidth };

            if (width < 768) {
                setSourcePath({ root: path + 'small/' + slideName + '/' });
            }
            if (width < 1023 && width > 768) {
                setSourcePath({ root: path + 'medium/' + slideName + '/' });
            }
            if (width > 1023) {
                setSourcePath({ root: path + 'large/' + slideName + '/' });
            }
        }

        window.addEventListener("resize", handleSourcePath);
        handleSourcePath();
        return () => window.removeEventListener("resize", handleSourcePath);

    }, [slideName]);

    return sourcePath;
}