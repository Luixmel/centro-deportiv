Gestión de Reservas en un Centro Deportivo
Este proyecto es una API RESTful desarrollada con NestJS, TypeORM y MySQL, enfocada en gestionar eficientemente usuarios, canchas deportivas, reservas y pagos.
Forma parte de un proyecto académico de formación SENA.

 Características principales
 .Registro de usuarios con fecha y datos de contacto

 .Gestión de canchas por nombre, tipo, ubicación y estado

 .Registro de reservas vinculadas a usuarios y canchas

 .Registro de pagos relacionados con reservas

 Validaciones de datos con DTOs

 Pruebas de endpoints con Insomnia/Postman

 Variables de entorno .env
Crea un archivo .env en la raíz con:

  env
  Copiar
  Editar
  DB_HOST=localhost
  DB_PORT=3306
  DB_USERNAME=root
  DB_PASSWORD=
  DB_DATABASE=centro_deportivo

  .Instalación y ejecución
  bash
  Copiar
  Editar
  npm install         # Instala dependencias
  npm run start:dev   # Ejecuta en modo desarrollo
  .Estructura del proyecto
  cpp
  Copiar
  Editar
  src/
  ├── usuario/
  │   ├── dto/
  │   ├── entities/
  │   ├── usuario.controller.ts
  │   ├── usuario.service.ts
  │   └── usuario.module.ts
  ├── cancha/
  │   ├── dto/
  │   ├── entities/
  │   ├── cancha.controller.ts
  │   ├── cancha.service.ts
  │   └── cancha.module.ts
  ├── reserva/
  ├── pago/
  └── app.module.ts
  .Endpoints principales
  Entidad	Método	Ruta	Descripción
  Usuario	POST	/usuarios	Crear nuevo usuario
  Usuario	GET	/usuarios	Listar usuarios
  Cancha	POST	/canchas	Registrar cancha
  Cancha	GET	/canchas	Ver todas las canchas
  Reserva	POST	/reservas	(Próximamente)
  Pago	POST	/pagos	(Próximamente)

  .Autor
  Luis Fernando Díaz Medina
  Ficha SENA 2903170
  GitHub: Luixmel