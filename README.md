## Переменные окружения

Необходимо добавить следующие переменные окружения в .env файл

```
API_KEY

```

- **API_KEY** - ключ api гугл карт

## Запуск

Версия nodejs **18.16.x**

Устанаваливаем зависимости

```bash
  npm ci
```

Запускаем фронтенд dev

```bash
  env $(cat .env) npm run dev
```

