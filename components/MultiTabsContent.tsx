import Image from "next/image";

interface MultiTabsContentProps {
    title: string;
}

interface UnitInfo {
    text: string;
    image: string;
}

interface SoldoutUnits {
    [key: string]: UnitInfo[];
}

const soldoutUnits: SoldoutUnits = {
    "Perak": [
        {text: "80 UNITS<br/>TAMAN LEKIR BAIDURI<br/>LEKIR, PERAK", image: "soldout_perak_1"},
        {text: "50 UNITS<br/>TAMAN TRONG AMAN<br/>TAIPING, PERAK", image: "soldout_perak_2"},
    ],
    "Pahang": [
        {text: "50 UNITS<br/>PERMATANG BADAK<br/>KUANTAN, PAHANG", image: "soldout_pahang_1"},
    ],
}

const MultiTabsContent = ({ title }: MultiTabsContentProps) => {
    return (
        <div>
            {soldoutUnits[title]?.map((item, index) => (
                <div key={index} className="grid grid-cols-2">
                    <div className="flex flex-col items-center text-center justify-center leading-[60px]">
                        <span dangerouslySetInnerHTML={{ __html: item.text }}></span>
                    </div>
                    <Image
                        src={`/${item.image}.png`} // Adjust the path as necessary
                        alt="sold out unit image"
                        width={1000}
                        height={1000}
                        className="object-cover object-center h-full w-full relative inset-x-0 rounded-xl mx-auto"
                    />
                </div>
            ))}
        </div>
    );
};

export default MultiTabsContent;