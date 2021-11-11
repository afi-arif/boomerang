import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { SlideSupply } from "./../datas/slide-data";
import { useWindowDimensions } from "./../hooks/windowDimensions";

interface PropsSlide {
    values: readonly [string, number, Dispatch<SetStateAction<number>>];
}

const SlideService = (slideName: string): PropsSlide["values"] => {

    const [slide, setSlide] = useState('');
    const [slideNo, setSlideNo] = useState(0);
    const { root } = useWindowDimensions(slideName);

    useEffect(() => {
        const slidesStore = SlideSupply(slideName);
        if (slideNo < 0) {
            setSlideNo(0);
        }
        if (slideNo > slidesStore.length - 1) {
            setSlideNo(slidesStore.length - 1)
        }
        setSlide(root + slidesStore[slideNo]);
    }, [root, setSlide, slideNo, slideName]);

    return [slide, slideNo, setSlideNo] as const;

}

export default SlideService;