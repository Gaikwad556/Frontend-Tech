export default function Greeting(props) {
    return (
        // below is called Fragments <> </>
        
        <> 
            <h2>This is greeting function</h2>
            <h3>Your name: {props.name}</h3>
            <h3>Your age: {props.age}</h3>
        </>
    )
}