// SSG 通用都是強制快取
export const fetchCache = "force-cache";

export async function fetchData() {
  const response = await fetch("https://data.moa.gov.tw/api/v1/PesticideType/");
  const data = await response.json();
  return data;
}

const Deploy = ({ data }) => {
  return (
    <div className="p-4">
      {data?.Data.map((item, index) => (
        <div className="m-2" key={index}>
          <div>{item.PesticideID}</div>
          <div>{item.PesticideName}</div>
          <div>{item.PesticideEnName}</div>
          <div>{item.PesticideCoaID}</div>
          <div>{item.PesticideProductName}</div>
        </div>
      ))}
    </div>
  );
};

export default async function SSGPage() {
const data = await fetchData();

  return (
    <div>
      <h2>SSG 頁的 Page</h2>
      <Deploy data={data} />
    </div>
  );
}
