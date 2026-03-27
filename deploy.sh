#!/bin/bash

echo "🚀 올페이스토어 Worker 배포 시작..."

if ! command -v wrangler &> /dev/null; then
  echo "📦 wrangler 설치 중..."
  npm install -g wrangler
fi

echo "🔑 Cloudflare 로그인 확인..."
wrangler whoami || wrangler login

echo "📡 배포 중..."
wrangler deploy

echo "✅ 배포 완료!"
echo "🌐 확인: https://allpaystore.com"
