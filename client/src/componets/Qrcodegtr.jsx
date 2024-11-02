import React, { useState ,useRef} from 'react';
import { QRCodeCanvas } from 'qrcode.react';

export default function Qrcodegtr() {
        const [text, setText] = useState('');
        const qrRef = useRef();

        const downloadQRCode = () => {
          const canvas = qrRef.current.querySelector('canvas');
          const pngUrl = canvas
            .toDataURL('image/png')
            .replace('image/png', 'image/octet-stream');
      
          const downloadLink = document.createElement('a');
          downloadLink.href = pngUrl;
          downloadLink.download = `${text || 'qr-code'}.png`;
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
        };
  return (
    < >
       <div className="qr-code-container">
      <h1>QR Code Generator</h1>
      <input
        type="text"
        placeholder="Enter text or URL"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="qr-input"
      />
      <div className="qr-code" ref={qrRef}>
        <QRCodeCanvas value={text || ' '} size={256} />
      </div>
      <button className="download-btn" onClick={downloadQRCode}>
        Download QR Code
      </button>
    </div>
    </ >
  )
}