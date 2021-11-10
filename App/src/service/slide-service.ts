// import { barkingRoadProject } from "./../datas/slide-data";
// import { useWindowDimensions } from "./../hooks/windowDimensions";

// const SlideService = () => {
//     const { root } = useWindowDimensions('Barking-Road');

//     useEffect(() => {
//         setSlide(root + barkingRoadProject[slideNo]);
//     }, [root, slideNo]);


//     const prevSlide = (event: React.MouseEvent<Element | MouseEvent>): void => {
//         event.preventDefault();
//         if (slideNo < 1) return;
//         setSlideNo(slideNo - 1);
//     }

//     const nextSlide = (event: React.MouseEvent<Element | MouseEvent>): void => {
//         event.preventDefault();
//         if (slideNo < barkingRoadProject.length - 1) {
//             setSlideNo(slideNo + 1);
//         }

//     }

// }

// export default SlideService;