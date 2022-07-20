import React, {useEffect, useState} from 'react'
import { banListApi, resListApi } from '../../api/Api';

const BanReason = () => {

    const [db, setData] = useState([]);

    const [wow, setWow] = useState([]);

    useEffect(() => {
        banListApi().then((data) => setData(data));
        resListApi().then((data) => setWow(data));
      }, []);
      console.log(db, wow)
      
    return (
        <div>
            <h1>
                블랙
            </h1>
            {
                db && db.map((i) => (
                    <div key={Math.random()}>
                        <div>
                            {i.blackListReason}
                        </div>
                        <h1>
                        {i.judgement}
                    </h1>
                    <h1>
                    {i.createdAt}
                </h1>
                <h1>
                    {i.expiredAt}
                </h1>
                </div>
                ))
            }
            <div>

            정지

{
                wow && wow.map((i) => (
                    <div key={Math.random()}>
                        <div>
                            {i.restrictedReason}
                        </div>
                        <h1>
                        {i.judgement}
                    </h1>
                    <h1>
                    {i.createdAt}
                </h1>
                <h1>
                    {i.restrictingDate}
                </h1>
                </div>
                ))
            }
            </div>

        </div>
    )
}

export default BanReason
