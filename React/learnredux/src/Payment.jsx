import { useSelector } from "react-redux";

export default function Payment() {
    const data = useSelector((state) => state.user);
    return (
        <>
            <h3>{data.username}</h3>
            <h3>{data.balance}</h3>
            <button>Pay</button>
        </>
    )
}