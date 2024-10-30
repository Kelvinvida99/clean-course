(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const filesToEvaluate = [
        { id: 1, flagger: false },
        { id: 2, flagger: false },
        { id: 3, flagger: true },
        { id: 4, flagger: false },
        { id: 5, flagger: false },
        { id: 7, flagger: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const arhivos = filesToEvaluate.map( file => file.flagger );

    //nombres mal asignado
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea
        
    // día de hoy - today
    const today = new Date();
    
    // días transcurridos - elapsed time in days
    const elapsedTimeInDays: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    const numberFilesInDirectory = 33;
    
    // primer nombre - first name
    const firstName = 'Fernando';
    
    // primer apellido - last name
    const lastName = 'Herrera';

    // días desde la última modificación - days since modification
    const daysSinceModification = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const maxClassPerStudent = 6;

})();
