# 🚀 Hướng dẫn Deploy lên Vercel

## Bước 1: Tạo tài khoản Vercel
1. Truy cập: https://vercel.com/signup
2. Đăng ký bằng GitHub account của bạn

## Bước 2: Import Project
1. Sau khi đăng nhập, click "Add New..." → "Project"
2. Chọn repo: `chat_test`
3. Click "Import"

## Bước 3: Cấu hình Environment Variables
1. Trong phần "Environment Variables", thêm:
   - Key: `GEMINI_API_KEY`
   - Value: `AIzaSyB0KkmZjqd34VucKgq8bd4-wZrzMyU3inA` (hoặc key mới của bạn)
2. Click "Add"

## Bước 4: Deploy
1. Click "Deploy"
2. Đợi 1-2 phút
3. Vercel sẽ tạo link cho bạn, ví dụ: `https://chat-test-xxx.vercel.app`

## Bước 5: Chia sẻ
- Copy link và chia sẻ với bạn bè
- Ai cũng có thể vào và chat với AI miễn phí!

## ⚠️ Lưu ý
- Vercel miễn phí có giới hạn:
  - 100GB bandwidth/tháng
  - 100 deployments/ngày
- Nếu nhiều người dùng, có thể hết quota Gemini API (60 requests/phút)
- Nên tạo API key riêng cho production

## 🔄 Update code
Mỗi khi bạn push code mới lên GitHub, Vercel sẽ tự động deploy lại!
