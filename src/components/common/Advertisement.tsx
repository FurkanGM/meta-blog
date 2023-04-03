import React from 'react';
import Image from "next/image";

type AdvertisementProps = {
    image: string,
    alt?: string
}

const Advertisement = ({image, alt}: AdvertisementProps) => {
    return (
        <div className="relative w-[750px] max-w-full h-[100px] rounded-xl overflow-hidden">
            <Image src={image} alt={String(alt)} className="object-cover" fill/>
        </div>
    );
};

export default Advertisement;
