import Row from "./Row";
import '../css/components/table.css';
import { useState } from "react/cjs/react.development";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

function Table(props){
    const [order, setOrder] = useState('ascending');
    const [searchTerm, setSearchTerm] = useState('');
    const sort = (col) =>{
        if(col === 'id' || col === 'userId'){
            if(order === 'ascending'){
                const sorted = [...props.data].sort((a,b)=>
                    +a[col] - +b[col]
                );
                props.setData(sorted);
                setOrder('descending');
            }

            if(order === 'descending'){
                const sorted = [...props.data].sort((a,b)=>
                    +a[col] + +b[col]
                );
                props.setData(sorted);
                setOrder('ascending');
            }

        }else{
            if(order === 'ascending'){
                const sorted = [...props.data].sort((a,b)=>
                        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
                );
                props.setData(sorted);
                setOrder('descending');
            }
            if(order === 'descending'){
                const sorted = [...props.data].sort((a,b)=>
                        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
                );
                props.setData(sorted);
                setOrder('ascending');
            }
        }

    }
    return(
        <div className = 'container'>
            <input type="text" name="search" placeholder='Search by...' onChange={(event) => setSearchTerm(event.target.value)}/>
            <table>
                <thead>
                    <tr>
                        <th onClick={()=>sort('id')}>
                            # <FontAwesomeIcon icon = {faCaretDown}/>
                        </th>
                        <th onClick={()=>sort('title')}>
                            Title <FontAwesomeIcon icon = {faCaretDown}/> 
                        </th>
                        <th onClick={()=>sort('body')}>
                            Body <FontAwesomeIcon icon = {faCaretDown}/> 
                        </th>
                        <th onClick={()=>sort('userId')}>
                            User <FontAwesomeIcon icon = {faCaretDown}/>
                        </th>
                    </tr>
                </thead>
                <tbody>
                {
                    props.data
                    .filter((val)=>{
                        if(searchTerm ===''){
                            return val;
                        } else if(
                            val.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            val.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            val.body.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            val.userId.toLowerCase().includes(searchTerm.toLowerCase())
                            ){
                            return val
                        } 
                    })
                    .map(element => {
                        return(
                            <Row key={element.id} item={element}/>
                        );
                    })
                }
                <tr><td></td></tr>
                </tbody>
            </table>
        </div>
    );
}


export default Table;