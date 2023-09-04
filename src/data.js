import catImg from "./assets/imgs/768x724_lottie.png";
import cyImg from "./assets/imgs/768x433_cy.jpg";
import bookImg from "./assets/imgs/768x521_book.png";
import popImg from "./assets/imgs/625x475_popup.png";
import albertImg from "./assets/imgs/487x463_albert.png";
import spaceImg from "./assets/imgs/space.png";
import fullSoulImg from "./assets/imgs/full-soul.png";
import globelistImg from "./assets/imgs/globelist.png";

export const websiteData = [
  {
    id: 1,
    title: "Recreating Cyworld",
    skill: "WebGL",
    content: "미니룸을 캔버스로 구현하여 키보드나 마우스로 미니미 = 미피를 움직일 수 있으며 프로필, 다이어리 등 싸이월드 레이아웃을 클론코딩하였습니다",
    url: "https://cy-world.netlify.app/",
    imgUrl: cyImg,
    isOpen: false,
  },
  {
    id: 2,
    title: "National dog's day",
    skill: "Lottie",
    content: "로티 애니메이션을 사용하여 네이버의 국제 강아지의 날에 사용된 인터랙션을 재구현하였습니다. 클릭하면 클릭 한 위치에서 부터 동물들이 등장하여 걸어다니는 모션입니다.",
    url: "https://lottie-animal-walking.netlify.app/",
    imgUrl: catImg,
    isOpen: false,
  },
  {
    id: 3,
    title: "Search books",
    skill: "API",
    content: "카카오 책 api를 사용하여 책 제목을 검색하면 줄거리와 작가 이름의 정보를 제공하는 기능을 구현하였습니다.",
    url: "https://book-review-kakao.netlify.app/",
    imgUrl: bookImg,
    isOpen: false,
  },
  {
    id: 4,
    title: "Mobile pop up",
    skill: "Slick",
    content: "슬릭 스와이퍼를 사용하여 모바일용 하단 배너 작업하였습니다. 이미지 사이즈에 따라 비율에 맞게 조절할 수 있습니다.",
    url: "https://bt-pop-up.netlify.app/",
    imgUrl: popImg,
    isOpen: false,
  },
  {
    id: 5,
    title: "Jumping ball",
    skill: "GSAP",
    content: "클릭하면 초록색 공이 클릭한 위치로 점프하는 인터랙션. 초록색 공 얼굴 모션, 돌아가는 모션, 점프 등 gsap를 사용하여 디테일한 부분까지 직접 구현하였습니다.",
    url: "https://albert-jumping.netlify.app/",
    imgUrl: albertImg,
    isOpen: false,
  },
  {
    id: 6,
    title: "Space Magazine",
    skill: "React",
    content: "스페이스 매거진을 리액트로 리뉴얼한 반응형 웹사이트입니다. 장바구니와 즐겨찾기 기능을 사용할 수 있습니다.",
    url: "https://minyeokang.github.io/space/",
    imgUrl: spaceImg,
    isOpen: false,
  },
  {
    id: 7,
    title: "Full page scroll",
    skill: "fullPage",
    content: "영화 소울을 소개하는 풀페이지 스크롤 웹사이트입니다.",
    url: "https://minyeokang.github.io/fullpage_soul/",
    imgUrl: fullSoulImg,
    isOpen: false,
  },
  {
    id: 8,
    title: "Globelist",
    skill: "HTML, CSS",
    content: "서브메뉴까지 전부 직접 디자인하고 코딩한 정적인 웹사이트입니다.",
    url: "https://globelist.netlify.app/",
    imgUrl: globelistImg,
    isOpen: false,
  },
];