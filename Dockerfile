# ベースイメージの指定
FROM node:20.0.0-alpine
FROM mcr.microsoft.com/playwright:focal

# ワークディレクトリを設定
WORKDIR /app

# パッケージ.jsonとパッケージロックファイルをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install
RUN npx playwright install

# 残りのファイルをコピー
COPY . .

# ポート3000でアプリケーションを起動
EXPOSE 3000
CMD ["npm", "run", "dev"]
