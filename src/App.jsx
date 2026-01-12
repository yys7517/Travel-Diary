import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  // 여행 리스트 데이터
  // useState(value) 대신 useState(()=>value 계산) 형식으로 첫 렌더링 때만 localStorage를 읽음

  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4]);

  const [travels, setTravels] = useState(() => {
    const saved = localStorage.getItem("travels");
    if (saved) {
      return JSON.parse(saved);
    }
    // 로컬스토리지 비어있으면 빈 배열(또는 샘플 데이터)
    return [
      {
        id: 1,
        name: "에펠탑",
        country: "프랑스",
        city: "파리",
        date: "2024-07-15",
        image:
          "https://i.namu.wiki/i/yF485NWCazWq7Zd52f5DzchphPkZ4VGVZXkx57AHIygI_GHgHLQnAa2zVJXZ_hxnid6NA09bKhxSc2FeLguNzw.webp",
        rating: 5,
        memo: "정말 아름다웠어요! 야경이 최고였습니다.",
        createdAt: "2024-07-20T10:30:00",
      },
      {
        id: 2,
        name: "도쿄 타워",
        country: "일본",
        city: "도쿄",
        date: "2024-08-10",
        image:
          "https://i.namu.wiki/i/YhfsSIpv2-kUxHuAKT7IjczYH2zr_H6IxzY-tkzvCWhbXev808r4NHrbf4s9GYhK_psYStWm9FjMfjLQxkW0PQ.webp",
        rating: 4,
        memo: "도쿄의 상징! 전망이 정말 좋았어요.",
        createdAt: "2024-08-15T14:20:00",
      },
      {
        id: 3,
        name: "콜로세움",
        country: "이탈리아",
        city: "로마",
        date: "2024-09-05",
        image:
          "https://i.namu.wiki/i/mecLdrbH6SANsAVoqJGrYR5XK31DY_6mMbGzSvM_FSrx5DgY9r7HhztOlvH85ecjWalmq08oyzSh2KWGYnAQag.webp",
        rating: 5,
        memo: "역사의 무게가 느껴지는 곳이었습니다.",
        createdAt: "2024-09-10T09:15:00",
      },
    ];
  });

  // 현재 수정모드인지 state
  const [editingTravel, setEditingTravel] = useState(null);

  // travels가 변경될 때마다 localStorage에 저장
  useEffect(() => {
    localStorage.setItem("travels", JSON.stringify(travels));
  }, [travels]);

  // 여행지 추가
  const handleAdd = (newTravel) => {
    setTravels([...travels, newTravel]);
  };

  // 여행지 수정
  const handleUpdate = (updateTravel) => {
    setTravels(
      // id 같은 것만 업데이트
      travels.map((t) => (t.id === updateTravel.id ? updateTravel : t))
    );
    // 수정 완료 후 초기화
    setEditingTravel(null);
  };

  // 여행지 삭제
  const handleDelete = (id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      setTravels(travels.filter((t) => t.id !== id));
    }
  };

  // 수정 시작
  const handleEdit = (travel) => {
    setEditingTravel(travel);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 수정 취소
  const handleCancelEdit = () => {
    setEditingTravel(null);
  };

  // 통계 계산
  const totalCountries = new Set(travels.map((t) => t.country)).size;

  return (
    // Header: 통계표시(읽기만 함)
    // TravelForm: 추가/수정 입력 폼
    // TravelList: 목록 렌더링 + 수정/삭제 버튼
    <div className="App">
      <Header totalTrips={travels.length} totalCountries={totalCountries} />
      <TravelForm
        onAdd={handleAdd}
        editingTravel={editingTravel}
        onUpdate={handleUpdate}
        onCancelEdit={handleCancelEdit}
      />
      <TravelList
        travels={travels}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
