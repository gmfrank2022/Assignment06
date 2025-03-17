let empForm,employeeID,employeeName,phoneExt,eMail,depSelect

const $ = (id) => document.getElementById(id)
empForm = $("empForm")
employeeID = $("empID")
employeeName = $("empname")
phoneExt = $("phonext")
eMail = $("email")
depSelect = $("depselect")
submit = $("submit")

submit.addEventListener('click', (e)=> {
    e.preventDefault()
    console.log(`ID: ${employeeID.value}\nName: ${employeeName.value}\nExtension: ${phoneExt.value}\nEmail: ${eMail.value}\nDepartment: ${depSelect.value}`)
})