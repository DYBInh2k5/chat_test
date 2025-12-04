from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv
import requests

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)  # Cho phép frontend gọi API

@app.route('/api/chat', methods=['POST'])
def chat():
    try:
        # Đảm bảo request có encoding UTF-8
        data = request.get_json(force=True)
        user_message = data.get('message', '')
        
        if not user_message:
            return jsonify({'error': 'Tin nhắn không được để trống'}), 400
        
        # Gọi Gemini API trực tiếp
        api_key = os.getenv('GEMINI_API_KEY')
        url = f"https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key={api_key}"
        
        payload = {
            "contents": [{
                "parts": [{
                    "text": f"Bạn là một trợ lý AI thông minh và hữu ích.\n\nUser: {user_message}\nAI:"
                }]
            }]
        }
        
        response = requests.post(url, json=payload)
        response_data = response.json()
        
        if response.status_code == 200:
            ai_message = response_data['candidates'][0]['content']['parts'][0]['text']
            return jsonify({
                'success': True,
                'message': ai_message
            })
        else:
            return jsonify({
                'success': False,
                'error': str(response_data)
            }), 500
    
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@app.route('/api/health', methods=['GET'])
def health():
    return jsonify({'status': 'ok'})

if __name__ == '__main__':
    if not os.getenv('GEMINI_API_KEY'):
        print("⚠️  CẢNH BÁO: Chưa có GEMINI_API_KEY trong file .env")
        print("   Vui lòng tạo file .env và thêm API key của bạn")
        print("   Lấy key miễn phí tại: https://makersuite.google.com/app/apikey")
    else:
        print("✅ Server đang chạy tại http://localhost:5000")
    
    app.run(debug=False, port=5000, host='127.0.0.1')
