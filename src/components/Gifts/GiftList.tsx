import React, {useEffect, useState} from 'react';
import {GiftEntity} from "types";
import GiftTable from "./GiftTable";

const GiftList = () => {
    const [giftList, setGiftList] = useState<GiftEntity[] | null>(null);

    useEffect(() => {
        (async () => {
            const res = await fetch("http://localhost:3001/gift");
            const data = await res.json() as GiftEntity[];
            setGiftList(data);
        })();
    }, [])

    const onGiftChange = (id: string) => {
        setGiftList((prev: GiftEntity[] | null) => {
            return prev?.filter(gift => gift.id !== id) as GiftEntity[];
        })
    }

    if (giftList === null) {
        return <p>Loading...</p>
    }

    return (
        <>
            <h1>Presents List</h1>
            <GiftTable gifts={giftList} onGiftChange={onGiftChange}/>
        </>
    );
};

export default GiftList;