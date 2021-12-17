import Row from "./Row";

function Table(props){
    console.log(props.data);
    return(
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>User</th>
                </tr>
            </thead>
            <tbody>
            {
                props.data.map(element => {
                    return(
                        <Row key={element.id} item={element}/>
                    );
                })
            }
            </tbody>
        </table>
    );
}


export default Table;