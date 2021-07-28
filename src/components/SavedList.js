import SavedJoke from "./SavedJoke";

const SavedList = ({ saved, callback }) => {
    return (
        <ul>
            { saved.map((s, key) => <SavedJoke key={ key } joke={ s } callback={ callback } />) }
        </ul>
    )
}

export default SavedList;