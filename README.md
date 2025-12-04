# 💬 AI Chat Application

Ứng dụng chat đơn giản với AI sử dụng OpenAI API, Python Flask và HTML/CSS/JS.

## 🚀 Hướng dẫn cài đặt

### Bước 1: Cài đặt Python
Đảm bảo bạn đã cài Python 3.8 trở lên. Kiểm tra bằng lệnh:
```bash
python --version
```

### Bước 2: Cài đặt thư viện Python
```bash
pip install -r backend/requirements.txt
```

### Bước 3: Tạo file .env và thêm OpenAI API Key
1. Copy file `.env.example` thành `.env`:
   ```bash
   copy .env.example .env
   ```

2. Lấy API key từ OpenAI:
   - Truy cập: https://platform.openai.com/api-keys
   - Đăng ký/Đăng nhập
   - Tạo API key mới
   - Copy API key

3. Mở file `.env` và thay thế `your_openai_api_key_here` bằng API key của bạn:
   ```
   OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxx
   ```

### Bước 4: Chạy ứng dụng

1. Chạy backend server:
   ```bash
   python backend/app.py
   ```
   Server sẽ chạy tại: http://localhost:5000

2. Mở file `frontend/index.html` bằng trình duyệt web
   - Cách 1: Double click vào file `frontend/index.html`
   - Cách 2: Kéo thả file vào trình duyệt
   - Cách 3: Chuột phải → Open with → Chrome/Firefox/Edge

## 📁 Cấu trúc dự án

```
ai-chat-app/
├── backend/
│   ├── app.py              # Flask server
│   └── requirements.txt    # Python dependencies
├── frontend/
│   ├── index.html         # Giao diện chat
│   ├── style.css          # Styling
│   └── script.js          # Logic frontend
├── .env                   # API keys (không commit lên Git)
├── .env.example          # Template cho .env
└── README.md             # File này
```

## 🎯 Tính năng

- ✅ Giao diện chat đẹp, thân thiện
- ✅ Tích hợp OpenAI GPT-3.5-turbo
- ✅ Responsive design
- ✅ Loading animation
- ✅ Hỗ trợ Enter để gửi, Shift+Enter để xuống dòng

## 🔧 Tùy chỉnh

### Thay đổi AI model
Trong file `backend/app.py`, dòng 28:
```python
model="gpt-3.5-turbo",  # Có thể đổi thành "gpt-4" nếu có quyền truy cập
```

### Thay đổi system prompt
Trong file `backend/app.py`, dòng 30:
```python
{"role": "system", "content": "Bạn là một trợ lý AI thông minh và hữu ích."}
```

### Thay đổi màu sắc giao diện
Chỉnh sửa file `frontend/style.css`, dòng 9-10:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## ⚠️ Lưu ý

- **Bảo mật API key**: Không chia sẻ file `.env` hoặc commit lên Git
- **Chi phí**: OpenAI API tính phí theo usage. Kiểm tra giá tại: https://openai.com/pricing
- **Rate limit**: Free tier có giới hạn số request/phút

## 🐛 Xử lý lỗi thường gặp

### Lỗi: "Module not found"
```bash
pip install -r backend/requirements.txt
```

### Lỗi: "OPENAI_API_KEY not found"
Kiểm tra file `.env` đã tạo và có API key chưa

### Lỗi: "CORS error"
Đảm bảo backend server đang chạy tại http://localhost:5000

### Lỗi: "Connection refused"
Kiểm tra backend server đã chạy chưa bằng lệnh:
```bash
python backend/app.py
```

## 📚 Học thêm

- [OpenAI API Documentation](https://platform.openai.com/docs)
- [Flask Documentation](https://flask.palletsprojects.com/)
- [JavaScript Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

## 🎉 Chúc bạn code vui vẻ!
