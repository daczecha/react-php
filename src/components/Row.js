function Row(props){
    return(
        <tr>
            <th>{props.item.id}</th>
            <th>{props.item.title}</th>
            <th>{props.item.body}</th>
            <th>{props.item.userId}</th>
        </tr>
    );
}

export default Row;