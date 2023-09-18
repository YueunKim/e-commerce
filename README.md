![header](https://capsule-render.vercel.app/api?type=waving&color=0:301273,100:301273)


<div align="center">
<img alt="Untitled" src="https://github.com/YueunKim/e-commerce/assets/65431814/6a8253c6-be98-46b1-aa24-1b5d9a70f3f5" width="600" height="100" > 
</div>  
<br>

## 📝 프로젝트 개요
- 프로젝트명 : Hogwarts Store
- 프로젝트 설명 : 해리포터 시리즈에 등장하는 캐릭터를 살 수 있는 가상의 온라인 쇼핑몰 입니다.
- 개발 기간 : 2023.08.18 ~ 2023.09.02
- 개발 인원 : 1명
- 개발 배경 : 해리포터 굿즈를 판매하는 오프라인 매장에 다녀온 후 온라인 쇼핑몰로 구현해보고 싶다는 생각을 바탕으로 개발하게 되었습니다.

<br/>

## 📁 파일 구조

```
📦 e-commerce
└─ client
   ├─ index.html
   ├─ public
   ├─ src
   │  ├─ App.jsx
   │  ├─ app.scss
   │  ├─ components
   │  │  ├─ Card
   │  │  │  ├─ Card.jsx
   │  │  │  └─ Card.scss
   │  │  ├─ Cart
   │  │  │  ├─ Cart.jsx
   │  │  │  └─ Cart.scss
   │  │  ├─ Categories
   │  │  │  ├─ Categories.jsx
   │  │  │  └─ Categories.scss
   │  │  ├─ Contact
   │  │  │  ├─ Contact.jsx
   │  │  │  └─ Contact.scss
   │  │  ├─ FeaturedProducts
   │  │  │  ├─ FeaturedProducts.jsx
   │  │  │  └─ FeaturedProducts.scss
   │  │  ├─ Footer
   │  │  │  ├─ Footer.jsx
   │  │  │  └─ Footer.scss
   │  │  ├─ List
   │  │  │  ├─ List.jsx
   │  │  │  └─ List.scss
   │  │  ├─ Navbar
   │  │  │  ├─ Navbar.jsx
   │  │  │  └─ Navbar.scss
   │  │  └─ Slider
   │  │     ├─ Slider.jsx
   │  │     └─ Slider.scss
   │  ├─ hooks
   │  │  └─ useFetch.js
   │  ├─ index.jsx
   │  ├─ makeRequest.js
   │  ├─ pages
   │  │  ├─ Home
   │  │  │  ├─ Home.jsx
   │  │  │  └─ Home.scss
   │  │  ├─ Product
   │  │  │  ├─ Product.jsx
   │  │  │  └─ Product.scss
   │  │  └─ Products
   │  │     ├─ Products.jsx
   │  │     └─ Products.scss
   │  └─ redux
   │     ├─ cartReducer.js
   │     └─ store.js
   └─ vite.config.js
```

<br/>

## 🛠 기술 스택

### Environment

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)

### Config

![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white) 

### Development

<img alt=""  src ="https://img.shields.io/badge/react-61DAFB.svg?&style=for-the-badge&logo=react&logoColor=white"/> <img alt=""  src ="https://img.shields.io/badge/javascript-F7DF1E.svg?&style=for-the-badge&logo=javascript&logoColor=white"/> <img alt=""  src ="https://img.shields.io/badge/sass-CC6699.svg?&style=for-the-badge&logo=sass&logoColor=white"/> 
<img alt=""  src ="https://img.shields.io/badge/vite-646CFF.svg?&style=for-the-badge&logo=vite&logoColor=white"/> <img alt=""  src ="https://img.shields.io/badge/axios-5A29E4.svg?&style=for-the-badge&logo=axios&logoColor=white"/> <img alt=""  src ="https://img.shields.io/badge/redux-764ABC.svg?&style=for-the-badge&logo=redux&logoColor=white"/>
 <img alt=""  src ="https://img.shields.io/badge/strapi-4945FF.svg?&style=for-the-badge&logo=strapi&logoColor=white"/>
 
### Depoloyment 


<br/>

## 📖 시작 가이드

### Requirements

For building and running the application you need:

- [Node.js](https://nodejs.org/ko/download)
- [npm](https://www.npmjs.com/package/package)

### Installation

``` bash
$ git clone https://github.com/YueunKim/e-commerce.git
$ cd e-commerce
$ npm i
$ npm run dev
```

<br/>



## 🙋‍♂️ 주요 기능
### 캐릭터 분류
- women, men 카테고리에 따라 캐릭터가 분류됩니다.
- student, professor, house elf, other 로 세부 카테고리에 따라 캐릭터가 분류됩니다.
- 원하는 금액대와 금액 높은 순, 낮은 순으로 정렬이 가능합니다.


### 장바구니
- 캐릭터 상세 페이지에서 원하는 개수만큼 장바구니에 담을 수 있습니다.
- 장바구니를 클릭하면 현재까지 담은 캐릭터와 총 금액을 볼 수 있습니다.
- 장바구니에서 개별 삭제 및 모두 삭제가 가능합니다.


<br/>

## 🔎 배운 점

- redux를 처음 적용해보며 전역 상태 관리의 중요성에 대해 배웠습니다.
- strapi를 처음 사용하여 직접 api를 생성하고 백엔드와 연동하는 경험을 통해 개발의 전체적인 흐름을 이해할 수 있었습니다.

<br>


![footer](https://capsule-render.vercel.app/api?section=footer&type=waving&color=0:301273,100:301273)
