'use client';


import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";

export default function Home() {
    const router = useRouter();


    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        setToken(storedToken);
        if (!storedToken) {
            router.replace("/login");
        }
    }, []);


    const [count, setCount] = useState(0);
    const handleLogout = () => {
        localStorage.removeItem("token");
        router.replace("/login");
    }

    if (!token) {
        return null;
    }

    return (
        <>
            <h1 style={{textAlign: "center"}}>Home</h1>

            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <div style={{
                    width: "600px",
                    padding: "20px",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    textAlign: "center",
                    backgroundColor: "white",
                    borderRadius: "8px",
                }}>
                    <h2 style={{fontSize: "20px", fontWeight: "bold", marginBottom: "10px"}}>Counter</h2>
                    <p style={{fontSize: "24px", fontWeight: "bold", marginBottom: "10px"}}>{count}</p>
                    <div style={{display: "flex", justifyContent: "space-between", marginBottom: "24px"}}>
                        <button className="counterButton" onClick={() => setCount(count + 1)}>+</button>
                        <button className="counterButton" onClick={() => setCount(count - 1)}>-</button>
                        <button className="counterButton" onClick={() => setCount(0)}>Reset</button>

                    </div>

                    <button onClick={() => handleLogout()}>Logout</button>
                </div>
            </div>
        </>
    );
}
