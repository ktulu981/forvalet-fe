# =========================
# 1. STAGE – BUILD (Node)
# =========================
FROM node:18-alpine AS build

# Çalışma dizini
WORKDIR /app

# Paket dosyalarını kopyala
COPY package.json package-lock.json* ./

# Dependenceleri yükle
RUN npm install --legacy-peer-deps

# Tüm projeyi kopyala
COPY . .

# Angular prod build
# (angular.json'daki "build" konfigürasyon adı "production" ise)
RUN npm run build -- --configuration production

# =========================
# 2. STAGE – SERVE (NGINX)
# =========================
FROM nginx:alpine

# Angular build çıktısını nginx'in html klasörüne kopyala
# NOT: "dist/PROJE_ADI" kısmını kendi proje ismine göre güncelle
COPY --from=build /app/dist/PROJE_ADI /usr/share/nginx/html

# İsteğe bağlı: kendi nginx config'in varsa önce sil / sonra kopyala
# RUN rm /etc/nginx/conf.d/default.conf
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Container dışına açılacak port
EXPOSE 80

# Nginx'i foreground'da çalıştır
CMD ["nginx", "-g", "daemon off;"]
