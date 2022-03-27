import React, { useState, useEffect } from 'react';
import { mainApi } from '../Api/Api'
import MainList from '../components/MainList'

export default function MTable(lecture) {
    const [db, setData] = useState({
        data: []
    })

    useEffect(() => {

        mainApi(setData, lecture.lecture)

    }, [lecture])

    return (
        <div style={{width:"100%", }}>
            {
                db.data.map((row) => <MainList key={row.id} data={row} />)
            }
        </div >
    );
}
