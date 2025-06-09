import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import './App.css'; // ✅ 꼭 있어야 함!

function App() {
  const [memberId, setMemberId] = useState("");
  const [showQR, setShowQR] = useState(false);

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
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <h2>QR 코드 생성기</h2>
      <input
        type="text"
        placeholder="회원번호 입력"
        value={memberId}
        onChange={(e) => setMemberId(e.target.value)}
        style={{ padding: "12px", fontSize: "18px", width: "250px" }}
      />
      <br /><br />
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <button onClick={handleGenerateQR} className="button">
          QR 코드 생성
        </button>
        <button onClick={handleReset} className="button">
          초기화
        </button>
      </div>
      <br />
      {showQR && (
        <div>
          <QRCodeSVG value={memberId} size={200} />
          <p>회원번호: {memberId}</p>
        </div>
      )}
    </div>
  );
}

export default App;

