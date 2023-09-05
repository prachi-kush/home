import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
const Places = () => {
    const [apiData, setapiData] = useState([]);

    const getData = async () => {
        try {
            axios.get('http://localhost:4000/posts').then(res=>{
                setapiData(res.data)
                console.log("======>",apiData)
            })
       
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData();

    }, [])

    const columns = [
        {
            name: "Title",
            selector: (row) => row.title,
            sortable:true,
        },
        {
            name: "Description",
            selector: (row) => row.description,
        },
        {
            name: "Description",
            selector: (row) => row.description,
        },
        {
            name:"ations",
            cell:(row)=>(<button className='btn btn-sm'
            onClick={()=>alert(row.title)
            }
            >Edit</button>),

        }

    ]

    return (



        <DataTable columns={columns}
         data={apiData} 
         pagination 
         fixedHeader
         fixedHeaderScrollHeight='450px'
         //selectableRows
         highlightOnHover
         actions={
            <button></button>
         }
         />


    )
}

export default Places
