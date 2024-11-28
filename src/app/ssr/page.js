// 固定需定義，在最上層 page
import Deploy from "../components/Deploy";
export const fetchCache = "force-no-store";

export async function fetchData() {
  const response = await fetch("https://data.moa.gov.tw/api/v1/PesticideType/");
  const data = await response.json();
  return data;
}

export default async function SSRPage() {
  const data = await fetchData();
  console.log(data);
  return (
    // <div>
    //   <h2>SSR 頁的 Page</h2>
    //   {data?.Data.map((item, index) => (
    //     <div key={index}>
    //       <h3>{item.PesticideName}</h3>
    //     </div>
    //   ))}
    // </div>
    
    <Deploy />
  );
}
