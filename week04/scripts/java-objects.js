/*
1.Given the following object literal for a course,

    let aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,
    };

    add a sections property to the object. Since the course may have more than one section, make this sections an array of at least two (2) items with the following properties:

        section
        enrolled
        instructor


        
        */
const id_section = document.querySelector("#sections");
const id_courseName = document.querySelector("#courseName")

let aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,
    sections: [{ section: "001", enrolled: 95, instructor: "Herobrine" }, { section: "002", enrolled: -1, instructor: "Sans Undertale" }],
};

// 2.Create a function named setCourseInformation() to display the course code and title in HTML. 
// Pass the course object as a parameter. 
// Use dot notation to access the properties you need and update the element with id courseName. 
function setCourseInformation(course) {
    id_courseName.innerHTML = `${course.code} - ${course.title}`
}
/*

Create a function named renderSections() that displays the course sections as rows in a table with id sections. 
*/
function renderSections(sections) {
    let rows = ''

    sections.forEach(element => {
        rows += `<tr>
        <td>${element.section}</td>
        <td>${element.enrolled}</td>
        <td>${element.instructor}</td>
        </tr>`
    });
    id_section.innerHTML += rows
}
/*
Another solution was 
function renderSections(course) {
  const tbody = document.querySelector("#sections tbody");
  let rows = "";
  for (const section of course.sections) {
    rows += `<tr>
      <td>${section.section}</td>
      <td>${section.enrolled}</td>
      <td>${section.instructor}</td>
    </tr>`;
  }
  tbody.innerHTML = rows;
}

*/

setCourseInformation(aCourse);
renderSections(aCourse.sections);
