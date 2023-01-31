export default function List({ list }) {
    return (
        <ul>
            {list.map(item => {
                return (
                    <Item key={item.objectID} item={item} />
                )
            })}
        </ul>
    )
}

function Item({ item }) {
    return (
        <li>
            <a href={item.url}>{item.title}</a>{', ' + item.author + ', ' + item.num_comments + ', ' + item.points}
        </li>
    )
}