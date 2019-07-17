Pasos para iniciar APIrest Nodejs Express y MySQL

En la carpeta donde se aloara el proyecto se ejecuta la terminal y en la misma se introducen los siguientes comandos
-Se requiere instalar MySQL Workbench en el sistema para administrar la base de datos.-

>> npm init --yes || Crea el archivo "package.json"
>> npm install express mysql || Se instalan esas dependencias para ser utilizadas
>> npm install nodemom -D || Para reiniciar el servidor cada vez que se guardan cambios

en el archivo "package.json" dentro del scope de "Scripts" se crea una linea llamada "dev": "nodemon src/index.js"

luego en la terminal se ejecuta el comando que ejecutará ese Script 
>> npm run dev
con eso se ejecuta nodemon de una forma mas facil