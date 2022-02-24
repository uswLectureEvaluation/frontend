import React, { useState } from 'react'
import { HeadSelection } from './Table.elements'

const Table = () => {
    const [db, setDb] = useState({
        data: [{
            q: '5',
            w: '20',
            e: '데이터베이스',
            r: '김대엽',
            t: '5',
        },
        {
            q: '3',
            w: '10',
            e: '데이터통신',
            r: '양수미',
            t: '5',
        },
        {
            q: '1',
            w: '2',
            e: '컴퓨터네트워크',
            r: '고승철',
            t: '5',
        }
        ]
    })

    return (
        <div>


            <div >
                <table>
                    <thead>
                        <tr>

                            <th>별점</th>
                            <th>수강번호 </th>
                            <th>과목 </th>
                            <th>교수님</th>
                            <th>영역</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            db.data.map((data) => (
                                <tr kry={data.q}>
                                    <td>{data.q}</td>
                                    <td>{data.w}</td>
                                    <td><span>{data.e}</span></td>
                                    <td>{data.r}</td>
                                    <td>{data.t}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table
