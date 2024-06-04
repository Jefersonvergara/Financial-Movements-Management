# Documentación de la API backen-api-ikualo

## Introducción

La API backen-api-ikualo proporciona endpoints para administrar usuarios y transacciones financieras. A continuación, se describen los principales endpoints y cómo utilizarlos.

## Autenticación

Para acceder a los endpoints protegidos, debes incluir un token de acceso en la cabecera de la solicitud. El token se obtiene mediante el endpoint de inicio de sesión.

## Endpoints

### Registro de usuario

- **Método:** POST
- **URL:** `http://localhost:3000/users`
- **Descripción:** Crea un nuevo usuario.
- **Cuerpo (JSON):**
  ```json
  {
    "username": "testuser8",
    "password": "testpassword"
  }
  ```

### Inicio de sesión

- **Método:** POST
- **URL:** `http://localhost:3000/auth/login`
- **Descripción:** Autentica a un usuario y genera un token JWT.
- **Cuerpo (JSON):**

```json
"username": "testuser8",
"password": "testpassword"
}
```

### Crear transacción

- **Método:** POST
- **URL:** `http://localhost:3000/transactions`
- **Descripción:** Crea una nueva transacción.

```json
{
  "username": "testuser",
  "type": "income",
  "amount": 13000
}
```

- **Cabeceras:**
- `Authorization`: Bearer `<token>`

### Actualizar transacción

- **Método:** PUT
- **URL:** `http://localhost:3000/transactions/:id`
- **Descripción:** Actualiza una transacción existente.
- **Parámetros de URL:**
  - `id`: ID de la transacción a actualizar.
- **Cabeceras:**

- `Authorization`: Bearer `<token>`

### Eliminar transacción

- **Método:** DELETE
- **URL:** `http://localhost:3000/transactions/:id`
- **Descripción:** Elimina una transacción por su ID.
- **Parámetros de URL:**
- `id`: ID de la transacción a eliminar.

- `Authorization`: Bearer `<token>`

# Obtener todas las transacciones por usuario

**Método:** GET
**URL:** `http://localhost:3000/transactions/:username`
**Descripción:** Obtiene todas las transacciones de un usuario específico.

**Parámetros de URL:**

- `username`: Nombre de usuario para filtrar las transacciones.

**Cabeceras:**

- `Authorization`: Bearer `<token>`

```

```
