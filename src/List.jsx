export default function List({ list }) {
    console.log(list)
    return (
        <ul>
            {list.map(item => <Item key={item.objectID} item={item} />)}
        </ul>
    )
}

function Item({ item }) {
    console.log('hej')
    return (
        <li>
            <a href={item.url}>{item.title}</a>{', ' + item.author + ', ' + item.num_comments + ', ' + item.points}
        </li>
    )
}