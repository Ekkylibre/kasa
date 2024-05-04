import './tag.css'

export default function Tag({ tags }) {
    return (
        <ul className="tag">
            {tags.map(tag => (
                <li key={tag}>{tag}</li>
            ))}
        </ul>
    );
}