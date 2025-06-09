import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import './App.css';

function QRPage({ memberId, setMemberId, showQR, setShowQR }) {
  const handleGenerateQR = () => {
    if (memberId.trim() !== "") {
      setShowQR(true);
    } else {
      alert("회원번호를 입력해주세요.");
    }
  };

  const handleReset = () => {
    setMemberId("");
    setShowQR(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <input
        type="text"
        placeholder="회원번호 입력"
        value={memberId}
        onChange={(e) => setMemberId(e.target.value)}
        style={{
          padding: "12px",
          fontSize: "18px",
          width: "250px",
        }}
      />

      {/* 버튼들과 입력창 사이 간격 동일 (30px) */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "250px",
          margin: "30px auto", // 상단 간격 30px
        }}
      >
        <button onClick={handleGenerateQR} className="button">
          QR 코드 생성
        </button>
        <button onClick={handleReset} className="button">
          초기화
        </button>
      </div>

      {showQR && (
        <div>
          <QRCodeSVG value={memberId} size={200} />
          <p>회원번호: {memberId}</p>
        </div>
      )}
    </div>
  );
}

function App() {
  const [selectedTab, setSelectedTab] = useState("qr");
  const [memberId, setMemberId] = useState("");
  const [showQR, setShowQR] = useState(false);

  return (
    <div className="app">
      {/* 슬라이드 토글 */}
      <div className="toggle-wrapper">
        <div className="toggle-container">
          <div
            className={`toggle-slider ${selectedTab === "other" ? "right" : ""}`}
          />
          <button
            className={`toggle-option ${selectedTab === "qr" ? "active" : ""}`}
            onClick={() => setSelectedTab("qr")}
          >
            QR 생성
          </button>
          <button
            className={`toggle-option ${selectedTab === "other" ? "active" : ""}`}
            onClick={() => setSelectedTab("other")}
          >
            기타 기능
          </button>
        </div>
      </div>

      {/* 선택된 탭 내용 */}
      {selectedTab === "qr" ? (
        <QRPage
          memberId={memberId}
          setMemberId={setMemberId}
          showQR={showQR}
          setShowQR={setShowQR}
        />
      ) : (
        <div style={{ marginTop: "50px", textAlign: "center" }}>
          <h3>Coming soon...</h3>
        </div>
      )}
    </div>
  );
}

export default App;
