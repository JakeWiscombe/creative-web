export const roster = $state({
  students: [],
  nextId: 1,
})

export function addStudent(name, petName, petType) {
  roster.students.push({
    id: roster.nextId,
    name,
    petName,
    petType,
  })
  roster.nextId += 1
}

export function removeStudent(id) {
  roster.students = roster.students.filter((student) => student.id !== id)
}