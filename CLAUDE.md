# SPIDERVERSE

Catálogo web de héroes y villanos del multiverso de Spider-Man, hecho en Django.

## Estructura del proyecto

```
spiderverse/                   # raíz del proyecto Django (manage.py aquí)
├── manage.py
├── db.sqlite3                 # base de datos SQLite (versionada en el repo)
├── spiderverse/                # paquete de configuración del proyecto
│   ├── settings.py
│   ├── urls.py                 # incluye las urls de la app "core"
│   ├── asgi.py / wsgi.py
└── core/                       # única app del proyecto
    ├── models.py                # modelos Spider y Villain
    ├── views.py                 # vistas basadas en función
    ├── urls.py                  # rutas de la app
    ├── admin.py                 # registro de modelos en el admin
    ├── migrations/
    ├── static/css/               # un .css por template (base, home, spider(s), villain(s))
    └── templates/
        ├── base.html             # layout base con header/nav/footer
        └── core/                 # home.html, spiders.html, spider.html, villains.html, villain.html
```

No hay `requirements.txt` ni entorno virtual versionado. Se creó un venv local en `.venv/` (no versionado) con `pip install django` para desarrollo (Django 6.1.1 instalado; el proyecto originalmente se generó apuntando a docs de Django 5.2 en los comentarios de `settings.py`).

## Modelos (`core/models.py`)

- `Spider`: alias, name, universe, description, power, image1, image2, image3 (nullable)
- `Villain`: mismos campos que `Spider` (estructura duplicada, candidato a modelo abstracto/base compartido)

## Vistas y URLs

- `/` → home
- `/spider_people/` → listado de héroes
- `/spider_people/<pk>` → detalle de héroe
- `/villains/` → listado de villanos
- `/villains/<pk>` → detalle de villano

Vistas simples basadas en función, sin paginación ni búsqueda/filtrado.

## Cómo correr el proyecto localmente

```powershell
# Crear venv (si no existe) e instalar Django
py -3 -m venv .venv
.venv\Scripts\pip.exe install django

# Desde spiderverse/ (donde está manage.py)
cd spiderverse
..\.venv\Scripts\python.exe manage.py runserver
```

Datos actuales en `db.sqlite3`: 12 Spiders, 8 Villains ya cargados.

## Hallazgos y posibles mejoras (pendientes de aprobación del usuario)

1. **Bug: campos "Poderes" y "Descripción" invertidos** en `core/templates/core/spider.html` y `core/templates/core/villain.html` — el bloque con encabezado "Descripción" muestra `{{ spider.power }}` y el bloque "Poderes" muestra `{{ spider.description }}` (están cruzados). Mismo problema en ambos templates.
2. **`SECRET_KEY` hardcodeada y `DEBUG = True`** en `settings.py`, típico de un proyecto en desarrollo pero a tener en cuenta si se piensa desplegar.
3. **Sin `requirements.txt`** — dificulta reproducir el entorno; se recomienda generarlo (`pip freeze > requirements.txt`).
4. **`db.sqlite3` versionado en git** — no ideal a largo plazo (usualmente se ignora y se documentan fixtures/seeds en su lugar).
5. **Duplicación entre `Spider` y `Villain`** — mismos campos exactos; se podría extraer un modelo abstracto base para evitar repetición.
6. **`image3` es `null=True` pero no `blank=True`** — en formularios/admin quedaría como campo requerido a pesar de aceptar `NULL` en BD.
7. **Sin tests reales** — `core/tests.py` existe pero está vacío (boilerplate por defecto).
8. **`.gitignore`** — verificar si excluye `__pycache__/`, `.venv/`, etc. (hay carpetas `__pycache__` ya trackeadas al parecer).

## Notas de estilo

- Templates en español, código/nombres de campos en inglés.
- Un archivo CSS por template, sin framework CSS.
