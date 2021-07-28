
const SavedJoke = ({ joke, callback }) => {
    return (
        <li onClick={ () => callback(joke) }>{ joke }</li>
    )
}

export default SavedJoke;