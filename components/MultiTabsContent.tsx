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
        {text: "44 UNITS<br/>ISKANDAR FURNISHED SUITS<br/>SERI ISKANDAR, PERAK", image: "soldout_perak_3"},
        {text: "TAMAN<br/>MATANG JAYA<br/>TAIPING, PERAK", image: "soldout_perak_4"},
        {text: "TAMAN<br/>KURAU MURNI<br/>TAIPING, PERAK", image: "soldout_perak_5"},
    ],
    "Pahang": [
        {text: "50 UNITS<br/>PERMATANG BADAK<br/>KUANTAN, PAHANG", image: "soldout_pahang_1"},
        {text: "T VISTA<br/>PERMATANG BADAK<br/>KUANTAN, PAHANG", image: "soldout_pahang_2"},
        {text: "T VISTA<br/>BALOK KUANTAN<br/>KUANTAN, PAHANG", image: "soldout_pahang_3"},
    ],
    "Johor": [
        {text: "100 UNITS<br/>TAMAN PANTAI<br/>BATU PAHAT, JOHOR", image: "soldout_perak_1"},
        {text: "100 UNITS<br/>TAMAN MAJU<br/>BATU PAHAT, JOHOR", image: "soldout_perak_2"},
        {text: "100 UNITS<br/>TAMAN DESA<br/>BATU PAHAT, JOHOR", image: "soldout_perak_3"},
    ],
    "Kelantan": [
        {text: "100 UNITS<br/>KAMPUNG PALOH<br/>KOTA BHARU, KELANTAN", image: "soldout_perak_1"},
        {text: "100 UNITS<br/>KAMPUNG BELUKAR<br/>KOTA BHARU, KELANTAN", image: "soldout_perak_2"},
        {text: "100 UNITS<br/>KAMPUNG LAMA<br/>KOTA BHARU, KELANTAN", image: "soldout_perak_3"},
    ],
    "Terengganu": [
        {text: "100 UNITS<br/>KAMPUNG RAJA<br/>BESUT, TERENGGANU", image: "soldout_perak_1"},
        {text: "100 UNITS<br/>KAMPUNG BELUKAR<br/>BESUT, TERENGGANU", image: "soldout_perak_2"},
        {text: "100 UNITS<br/>KAMPUNG LAMA<br/>BESUT, TERENGGANU", image: "soldout_perak_3"},
    ],
    "Negeri Sembilan": [
        {text: "100 UNITS<br/>DESA CEMPAKA<br/>NILAI, NEGERI SEMBILAN", image: "soldout_perak_1"},
        {text: "100 UNITS<br/>DESA MELATI<br/>NILAI, NEGERI SEMBILAN", image: "soldout_perak_2"},
        {text: "100 UNITS<br/>DESA KASIA<br/>NILAI, NEGERI SEMBILAN", image: "soldout_perak_3"},
    ],
}

const MultiTabsContent = ({ title }: MultiTabsContentProps) => {
    return (
        <div className="flex flex-col gap-16 lg:gap-5">
            {soldoutUnits[title]?.map((item, index) => (
                <div key={index} className="flex flex-col-reverse gap-2 lg:grid lg:grid-cols-2">
                    <div className="flex flex-col items-center text-center justify-center lg:leading-[60px]">
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