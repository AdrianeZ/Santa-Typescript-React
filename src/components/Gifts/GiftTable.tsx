import React from 'react';
import {GiftEntity} from "types";
import GiftTableRow from "./GiftTableRow";

interface Props {
    gifts: GiftEntity[];
    onGiftChange: (id: string) => void;
}

const GiftTable = ({gifts, onGiftChange}: Props) => (
    <table>
        <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Count</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {
            gifts.map(gift => <GiftTableRow key={gift.id} gift={gift} onGiftChange={onGiftChange}/>)
        }
        </tbody>
    </table>
)


export default GiftTable;