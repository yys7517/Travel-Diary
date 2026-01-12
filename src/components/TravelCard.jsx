import "./TravelList.css";

function TravelCard({ travel, onEdit, onDelete }) {
  const stars = "⭐".repeat(travel.rating); // .repeat(n): 문자열을 n번 반복해서 새로운 문자열을 만들어주는 메서드
  return (
    <div className="travel-card">
      <div className="card-image">
        {/* {사진 URL 있으면 <img> 없으면 대체 UI 표시} */}
        {travel.image ? (
          <img src={travel.image} alt={travel.name} />
        ) : (
          <div className="no-image">📷</div>
        )}
      </div>
      <div className="card-content">
        <h3>{travel.name}</h3>
        <p className="location">
          📍 {travel.city}, {travel.country}
        </p>
        <p className="date">📅 {travel.date}</p>
        <p className="rating">{stars}</p>
        {travel.memo && <p className="memo">{travel.memo}</p>}
      </div>
      <div className="card-actions">
        <button className="btn-edit" onClick={() => onEdit(travel)}>
          수정
        </button>
        <button className="btn-delete" onClick={() => onDelete(travel.id)}>
          삭제
        </button>
      </div>
    </div>
  );
}
export default TravelCard;
