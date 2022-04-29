const courses = [
    { _id: 1, title: "JavaScript I" },
    { _id: 2, title: "HTML y CSS I" },
  ]
  
  const students = [
    { _id: 1, name: "Pedro Perez" },
    { _id: 2, name: "Maria Gomez" },
  ]
  
  const enrollments = [
    { course_id: 1, student_id: 1 },
    { course_id: 2, student_id: 1 },
    { course_id: 2, student_id: 2 }
  ]
  // 1. Imprimir los cursos y los estudiantes de cada curso con el siguiente formato:

const cursosEstudiantes = `- ${courses[0].title} \n * ${students[0].name} \n- ${courses[1].title} \n * ${students[0].name} \n * ${students[1].name}`

console.log(cursosEstudiantes)
//   - JavaScript I
//      * Pedro Perez
//   - HTML y CSS I
//      * Pedro Perez
//      * Maria Gomez

// Imprimir los estudiantes y los cursos a los que están matriculados con el siguiente formato:
console.log('---------------')

const matriculasEstudiantes = `- ${students[0].name} \n * ${courses[0].title} \n * ${courses[1].title}\n- ${students[1].name} \n * ${courses[1].title}`

console.log(matriculasEstudiantes)

// - Pedro Perez
//   * JavaScript I
//   * HTML y CSS I
// - Maria Gomez
//   * HTML y CSS I
