# [원티드X위코드] 프리온보딩 프론트엔드 코스 선발 과제 (김재원)

> This project is deployed with Vercel and [Create React App](https://github.com/facebook/create-react-app).\
> You can check out the project here: [wanted-onboarding-frontend.vercel.app](https://wanted-onboarding-frontend.vercel.app)

## 📑 구현 기능 상세

React의 함수형 컴포넌트를 적극 활용하여 프로젝트를 수행하였습니다.\
선발 과제의 요구사항을 중심으로 세부적인 일부 기능은 자율적으로 개선하였습니다.

### 1. Global Navigation Bar (`NavBar` 컴포넌트)

- 상단에 고정된 Navigation Bar의 기본적인 레이아웃 문서를 작성 (마크업 위주)
- hover했을 때에 메뉴마다 밑줄이 생기는 효과 및 새로운 소식을 표시하는 아이콘 구현

### 2. Infinite Carousel (`Carousel` 컴포넌트)

- 좌/우 버튼을 클릭하거나, 일정 시간이 지나면 다음 슬라이드로 이동하는 기능 구현
- 슬라이드 이동의 기준으로 삼은 Index를 활용하여 조건부 렌더링 및 스타일링 구현
- react-swipeable 라이브러리를 활용해 웹에서도 마우스 스와이프 이벤트를 활성화

### 3. 기타

- Vercel을 통해 배포하여 상기 링크를 통해 브라우저에서 구현사항 확인 가능
- 반응형 웹 설계 및 Grid System 구현을 위해 CSS 라이브러리 및 툴킷 활용
- API의 부재로 인해 리스트 렌더링에 필요한 정보는 Mock Data로 대체

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
