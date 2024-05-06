# ベースイメージの指定
FROM node:20.0.0-alpine

# ワークディレクトリを設定
WORKDIR /app

# パッケージ.jsonとパッケージロックファイルをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# 残りのファイルをコピー
COPY . .

# ポート3000でアプリケーションを起git動
EXPOSE 3000
CMD ["npm", "run", "dev"]
