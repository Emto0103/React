// 모두투어 메인 페이지 - React 예제 (하위 컴포넌트 활용)

import React from 'react';
import './App.css';

// Header 컴포넌트
function Header() {
    return (
        <header className="header">
            <h1>모두투어</h1>
            <Nav />
        </header>
    );
}

// Navigation 컴포넌트 (재사용 가능)
function Nav() {
    return (
        <nav>
            <ul className="nav-list">
                <li><a href="#">홈</a></li>
                <li><a href="#">여행지</a></li>
                <li><a href="#">예약</a></li>
                <li><a href="#">고객센터</a></li>
            </ul>
        </nav>
    );
}

// Banner 컴포넌트
function Banner({ title, subtitle, buttonText }) {
    return (
        <div className="banner">
            <h2>{title}</h2>
            <p>{subtitle}</p>
            <button>{buttonText}</button>
        </div>
    );
}

// 여행지 카드 컴포넌트 (재사용 가능)
function DestinationCard({ image, name, description }) {
    return (
        <div className="destination-card">
            <img src={image} alt={name} className="destination-image" />
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
}

// 여행지 리스트 컴포넌트
function DestinationList({ destinations }) {
    return (
        <div className="destination-list">
            {destinations.map((dest) => (
                <DestinationCard
                    key={dest.id}
                    image={dest.image}
                    name={dest.name}
                    description={dest.description}
                />
            ))}
        </div>
    );
}

// Footer 컴포넌트
function Footer() {
    return (
        <footer className="footer">
            <p>&copy; 2024 모두투어. 모든 권리 보유.</p>
        </footer>
    );
}

// 메인 App 컴포넌트
function App() {
    const sampleDestinations = [
        { id: 1, name: '제주도', description: '아름다운 자연과 다양한 액티비티.', image: 'jeju.jpg' },
        { id: 2, name: '부산', description: '해운대 해변과 맛있는 해산물.', image: 'busan.jpg' },
        { id: 3, name: '강릉', description: '동해의 맑은 바다와 커피거리.', image: 'gangneung.jpg' },
    ];

    return (
        <div className="App">
            <Header />
            <Banner
                title="여행을 떠나세요!"
                subtitle="지금 바로 특별한 여행 상품을 확인하세요."
                buttonText="더 알아보기"
            />
            <main>
                <h2>추천 여행지</h2>
                <DestinationList destinations={sampleDestinations} />
            </main>
            <Footer />
        </div>
    );
}
export default App;