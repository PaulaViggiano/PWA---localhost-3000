# Git — Paso a paso desde cero

## Paso 1: Clonar el repositorio

Si el repo ya existe en GitHub, lo clonas a tu máquina:

```bash
git clone https://github.com/tu-usuario/cinetracker.git
```

Entrás a la carpeta del proyecto:

```bash
cd cinetracker
```

Verificás que estás en la rama `main`:

```bash
git branch
```

Deberías ver:

```
* main
```

---

## Paso 2: Crear la rama develop (solo una vez, lo hace una persona)

Esto lo hace solo un integrante del equipo, una única vez:

```bash
git checkout -b develop
```

Esto crea la rama `develop` y te mueve a ella. Verificás:

```bash
git branch
```

Deberías ver:

```
  main
* develop
```

La subís a GitHub:

```bash
git push -u origin develop
```

A partir de acá, `develop` ya existe en GitHub para todo el equipo.

---

## Paso 3: Los demás integrantes traen develop

Cada integrante que ya tenía el repo clonado hace:

```bash
git fetch origin
git checkout develop
```

Verificás:

```bash
git branch
```

```
  main
* develop
```

Si todavía no tenías el repo, al clonarlo ya te trae todas las ramas. Solo hacés `git checkout develop`.

---

## Paso 4: Crear tu rama de trabajo

Supongamos que te asignaron la tarea T-07 (componente Titulo).

Primero asegurate de estar en `develop` y tenerla actualizada:

```bash
git checkout develop
git pull origin develop
```

Ahora creás tu rama:

```bash
git checkout -b feature/titulo-component
```

Verificás que estés en tu rama:

```bash
git branch
```

```
  main
  develop
* feature/titulo-component
```

---

## Paso 5: Trabajar y hacer commits

Ahora trabajás normalmente. Creás archivos, escribís código, etc.

Cuando terminás un paso lógico, hacés un commit. Primero mirá qué archivos cambiaste:

```bash
git status
```

Te va a mostrar algo como:

```
Changes not staged for commit:
    modified:   src/App.js

Untracked files:
    src/Components/Titulo/Titulo.js
    src/Components/Titulo/Styles.css
```

Agregás todo al staging:

```bash
git add .
```

Hacés el commit con un mensaje descriptivo:

```bash
git commit -m "crear componente Titulo con props de texto"
```

Seguís trabajando, y hacés otro commit cuando corresponda:

```bash
git add .
git commit -m "agregar estilos css para Titulo"
```

Y otro más:

```bash
git add .
git commit -m "usar Titulo en Home.js como titulo de la app"
```

---

## Paso 6: Subir tu rama a GitHub

Subís tu rama al repositorio remoto. La primera vez:

```bash
git push -u origin feature/titulo-component
```

Las siguientes veces alcanza con:

```bash
git push
```

---

## Paso 7: Actualizar tu rama antes del PR

Antes de pedir que revisen tu código, traé los últimos cambios de `develop` por si alguien ya mergeó otra cosa:

```bash
git checkout develop
git pull origin develop
```

Volvés a tu rama:

```bash
git checkout feature/titulo-component
```

Mergeás develop dentro de tu rama:

```bash
git merge develop
```

Acá pueden pasar dos cosas:

**Si no hay conflictos**, vas a ver algo como:

```
Already up to date.
```

o

```
Merge made by the 'ort' strategy.
```

Seguís al paso 8.

**Si hay conflictos**, Git te va a decir en qué archivos. Abrís esos archivos y vas a ver algo así:

```
<<<<<<< HEAD
tu código
=======
el código que viene de develop
>>>>>>> develop
```

Elegís cuál versión dejar (o combinás ambas), borrás las líneas con `<<<<<<<`, `=======` y `>>>>>>>`, guardás el archivo y hacés:

```bash
git add .
git commit -m "resolver conflictos con develop"
```

Después pusheás tu rama actualizada:

```bash
git push
```

---

## Paso 8: Crear el Pull Request en GitHub

1. Abrí tu repositorio en GitHub.
2. GitHub te va a mostrar un banner amarillo diciendo que pusheaste una rama. Hacé clic en **"Compare & pull request"**.
3. Si no aparece el banner, andá a la pestaña **"Pull requests"** → **"New pull request"**.
4. Configurá las ramas así:
   - **base:** `develop` ← **compare:** `feature/titulo-component`
5. Escribí un título descriptivo y en la descripción poné:
   - Qué hiciste.
   - Qué tarea de Linear cierra (ej: "Cierra T-07").
6. Hacé clic en **"Create pull request"**.

---

## Paso 9: Code review

Un compañero revisa tu PR en GitHub:

1. Entra al PR.
2. Va a la pestaña **"Files changed"** para ver el código.
3. Si está todo bien, hace clic en **"Review changes"** → **"Approve"** → **"Submit review"**.
4. Si hay algo para corregir, deja comentarios y elige **"Request changes"**.

Si te piden cambios, los hacés en tu misma rama:

```bash
git checkout feature/titulo-component
```

Corregís lo que te pidieron, y:

```bash
git add .
git commit -m "corregir observaciones del code review"
git push
```

El PR se actualiza automáticamente.

---

## Paso 10: Merge a develop

Una vez que el PR está aprobado:

1. En la página del PR en GitHub, hacé clic en **"Merge pull request"**.
2. Confirmá con **"Confirm merge"**.
3. Hacé clic en **"Delete branch"** para limpiar la rama que ya no necesitás.

En tu máquina local, limpiá también:

```bash
git checkout develop
git pull origin develop
git branch -d feature/titulo-component
```

---

## Paso 11: Merge a main (solo el PM, al final de la iteración)

Cuando `develop` tiene varias features terminadas y todo funciona:

```bash
git checkout main
git pull origin main
git merge develop
git push origin main
```

Opcionalmente, tagear la versión:

```bash
git tag -a v1.0 -m "Iteracion 1 completa"
git push origin v1.0
```

---

## Resumen visual

```
TU FLUJO PARA CADA TAREA:

  1. git checkout develop
  2. git pull origin develop
  3. git checkout -b feature/mi-tarea
  4. --- trabajás y hacés commits ---
  5. git push -u origin feature/mi-tarea
  6. git checkout develop && git pull origin develop
  7. git checkout feature/mi-tarea && git merge develop
  8. git push
  9. Crear PR en GitHub: feature/mi-tarea → develop
 10. Compañero aprueba
 11. Merge PR en GitHub
 12. git checkout develop && git pull origin develop
```

---

## Comandos útiles de referencia

| Qué necesitás | Comando |
|---|---|
| Ver en qué rama estás | `git branch` |
| Ver el estado de tus archivos | `git status` |
| Ver el historial de commits | `git log --oneline` |
| Cambiar de rama | `git checkout nombre-rama` |
| Crear rama nueva | `git checkout -b nombre-rama` |
| Traer cambios del remoto | `git pull origin nombre-rama` |
| Subir tu rama | `git push -u origin nombre-rama` |
| Borrar rama local | `git branch -d nombre-rama` |
| Borrar rama remota | `git push origin --delete nombre-rama` |
| Deshacer cambios no commiteados | `git checkout -- archivo` |
| Ver ramas remotas | `git branch -r` |
