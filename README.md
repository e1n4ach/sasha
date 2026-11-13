# Приглашение ♥

Статический сайт без сборки и зависимостей. Шрифт хранится локально, поэтому страница не обращается к Google Fonts. Текст можно изменить в `index.html`, цвета и оформление — в `style.css`.

## GitHub Pages

1. Создай репозиторий на GitHub и загрузи в него все файлы из этой папки, включая `assets` и `.nojekyll`. `index.html` должен лежать в корне репозитория.
2. Открой **Settings → Pages**.
3. В разделе **Build and deployment** выбери **Deploy from a branch**.
4. Укажи ветку **main**, папку **/ (root)** и нажми **Save**.
5. Дождись публикации. GitHub покажет ссылку вида `https://USERNAME.github.io/REPOSITORY/`. Её можно отправить девушке.

Для адреса `https://USERNAME.github.io/` назови репозиторий `USERNAME.github.io`.

## Локальный просмотр

Можно просто открыть `index.html` в браузере. Или из папки проекта запустить:

```sh
python -m http.server 8080
```

Затем открыть `http://localhost:8080`.

Шрифт: Marck Script, SIL Open Font License 1.1 (см. `assets/OFL.txt`).
