const slides: { [key: string]: string[] } = {
    "Barking-Road": ['boomerang-site1.jpg', 'boomerang-site2.jpg', 'boomerang-site3.jpg'],
    "Field-Road": ['boomerang-site1.jpg', 'boomerang-site2.jpg', 'boomerang-site3.jpg'],
    "Katherine-Road": ['boomerang-site1.jpg', 'boomerang-site2.jpg', 'boomerang-site3.jpg'],
}

export const SlideSupply = (slideName: string): string[] => {
    return slides[slideName];
}