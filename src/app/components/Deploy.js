'use client';
import { useState, useEffect } from "react";

const Deploy = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch("https://data.moa.gov.tw/api/v1/PesticideType/")
        .then((response) => response.json())
        .then((data) => {
            setData(data);
            setLoading(false);
        });
    }, []);
    
    return (
        <div>
        <h2>CSR 頁的 Page</h2>
        {loading ? (
            <div>資料載入中...</div>
        ) : (
            <div>
            {data?.Data.map((item, index) => (
                <div key={index}>
                <h3>{item.PesticideName}</h3>
                </div>
            ))}
            </div>
        )}
        </div>
    );
}

export default Deploy;