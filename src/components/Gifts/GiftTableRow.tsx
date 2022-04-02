import React, {MouseEvent} from 'react';
import {GiftEntity} from "types";

interface Props {
    gift: GiftEntity;
    onGiftChange: (id: string) => void
}

const GiftTableRow = ({gift, onGiftChange}: Props) => {

    const deleteGift = async (event: MouseEvent) => {
        event.preventDefault();
        if (!window.confirm(`Are You sure you want to delete ${gift.name}`)) {
            return;
        }

        const res = await fetch(`http://localhost:3001/gift/${gift.id}`, {method: "DELETE"});
        if (res.status === 400 || res.status === 500) {
            const error = await res.json() as { message: string };
            alert(`Error Occured ${error.message}`);
            return;
        }

        onGiftChange(gift.id!);

    }

    return (
        <tr>
            <th>{gift.id}</th>
            <td>{gift.name}</td>
            <td>{gift.count}</td>
            <td>
                <a href="#" onClick={deleteGift}>🗑️</a>
            </td>
        </tr>
    );
}


export default GiftTableRow;