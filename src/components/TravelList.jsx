import TravelCard from "./TravelCard";
import "./TravelList.css";

function TravelList({ travels, onEdit, onDelete }) {
  //베열 길이가 0일 때 다른 UI를 return, map 실행 전에 return 해서 에러 방지
  //데이터가 없을 때 다른 화면을 보여주는 조건부 렌더링
  if (travels.length === 0) {
    return (
      <div className="empty-state">
        <p>🌍</p>
        <p>아직 여행 기록이 없습니다.</p>
        <p>첫 번째 여행지를 추가해보세요!</p>
      </div>
    );
  }
  return (
    <div className="travel-list">
      {/* {map으로 배열 렌더링} */}
      {travels.map((travel) => (
        <TravelCard
          key={travel.id} //react가 각 요소를 구분하기 위해서 필요
          travel={travel} // travel 객체를 그대로 자식에게 전달
          onEdit={onEdit} //부모에게서 받은 onEdit, onDelete를 그대로 전달
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TravelList;
