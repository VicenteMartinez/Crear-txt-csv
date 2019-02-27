const fs=require('fs');

fs.writeFile('./archivo1.txt', 'No: 1\nNC: 14401037\nNombre: Vicente \nCalificacion: 100\n\n'
+                              'No: 2\nNC: 14401037\nNombre: Vicente \nCalificacion: 100\n\n'
+                              'No: 3\nNC: 14401037\nNombre: Vicente \nCalificacion: 100\n\n'
+                              'No: 4\nNC: 14401037\nNombre: Vicente \nCalificacion: 100\n\n'
+                              'No: 5\nNC: 14401037\nNombre: Vicente \nCalificacion: 100\n\n'
+                              'No: 6\nNC: 14401037\nNombre: Vicente \nCalificacion: 100\n\n'
+                              'No: 7\nNC: 14401037\nNombre: Vicente \nCalificacion: 100\n\n'
+                              'No: 8\nNC: 14401037\nNombre: Vicente \nCalificacion: 100\n\n'
+                              'No: 9\nNC: 14401037\nNombre: Vicente \nCalificacion: 100\n\n'
+                              'No: 10\nNC: 14401037\nNombre: Vicente \nCalificacion: 100\n\n'
, error => {
  if (error)
    console.log(error);
  else
    console.log('El archivo fue creado');
});

console.log('última línea del programa');

console.log('-----------------------------------------');