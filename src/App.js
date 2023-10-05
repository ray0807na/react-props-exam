import logo from "./logo.svg";
import "./App.css";
import Food from "./Component/Food";

function App() {
  const favFoods = [
    {
      id: 0,
      name: "짜장면",
      foodImg:
        "https://img-cf.kurly.com/shop/data/goodsview/20201012/gv10000126356_1.jpg",
    },
    {
      id: 1,
      name: "김치찌개",
      foodImg:
        "https://recipe1.ezmember.co.kr/cache/recipe/2017/04/28/aabd268952801d84ed5a0bc0129cb9c51.jpg",
    },
    {
      id: 2,
      name: "돈까스",
      foodImg:
        "https://i.namu.wiki/i/aN7eMJzy4XAy1yqpL3kHb41MBsSdfPjt1ZqMfDXYk6J3-je6M8dNVOMldpbxhZ-IlO9IfHXMzpZc1tVvat5IjQ.webp",
    },
    {
      id: 3,
      name: "라면",
      foodImg: "https://img.choroc.com/newshop/goods/009179/009179_1.jpg",
    },
    {
      id: 4,
      name: "햄버거",
      foodImg: "https://img.hankyung.com/photo/201908/01.20330262.1.jpg",
    },
  ];
  return (
    <div className="App">
      <h1>My Favorite Food List</h1>
      <div className="favFoodList">
        {favFoods.map((food) => (
          <Food key={food.id} name={food.name} foodImg={food.foodImg} />
        ))}
      </div>
    </div>
  );
}

export default App;
