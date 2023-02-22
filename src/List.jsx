export default function List({ list, remove }) {
        return (
            <ul>
                {list.map(item => <Item key={item.objectID} item={item} remove={remove} />)}
            </ul>
        )
    }

function Item({ item, remove }) {
    return (
        <li>
            <a href={item.url}>{item.title}</a>{', ' + item.author + ', ' + item.num_comments + ', ' + item.points}
            <button onClick={() => remove(item)}>Remove</button>
        </li>
    )
}