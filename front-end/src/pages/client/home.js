// import Header from "../../components/header"
import React, { useContext, useEffect, useState } from 'react';
import HallForList from "../../components/listHall";
import Calendar from '../../components/calendar';
import { SelectionButton } from '../../components/selectionButton';
import { Effect } from '../../hooks/useEffect';

export const Home = () => {
    const  halls  = Effect("/")
    const nameHalls = halls?.map(({ name_hall }) => {
        return { label: name_hall }
    })
    return (
        <>
            <SelectionButton names={nameHalls ? nameHalls : ""}
            />
            <Calendar />
            <div>
                {halls && <HallForList halls={halls} />}
            </div>

        </>
    )
}