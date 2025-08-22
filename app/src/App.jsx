import styled from "styled-components";
import { useEffect,useState } from "react";
import SearchResult from "./components/SearchResult/SearchResult";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);



  useEffect(() => {
      const fetchFoodData = async () => {
    setLoading(true);

    try {
      const response = await fetch(BASE_URL);

      const json =await response.json();

      setData(json);
      setLoading(false);
    } catch (error) {
      setError("Unable to fetch data");
    }
  };
  fetchFoodData();
  }, [])

  console.log(data);

  /* 
  const temp = {
        "name": "Boilded Egg",
        "price": 10,
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        "image": "/images/egg.png",
        "type": "breakfast"
  }; 
  */
  
  if (error) return <div>{error}</div>;
  if (loading) return <div>loading.....</div>;

  return (
  <>
  <Container>
    <TopContainer>
      <div className="logo">
        <img src="/logo.svg" alt="logo"/>
      </div>
      <div className="search">
        <input placeholder="Search Food"/>
      </div>
    </TopContainer>
    <FilterContainer>
      <Button>All</Button>
      <Button>Breakfast</Button>
      <Button>Lunch</Button>
      <Button>Dinner</Button>
    </FilterContainer>
  </Container>
  
  <SearchResult data={data}/>
</>
  );
};

export default App;

export const Container = styled.div`
 max-width: 1200px;
 margin: 0 auto;
`;

const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search {
    input{
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
    }
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`;

export const Button = styled.button`
  background-color: #FF4343;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
`;

