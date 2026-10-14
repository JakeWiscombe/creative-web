<script>
    import { addStudent } from './RosterState.svelte.js'

    let studentName = $state('');
    let petName = $state('')
    let petType = $state('');

    function handleSubmit(event) {
    event.preventDefault() // Stops the page from reloading when the form is submitted

    console.log('Student Name:', studentName, ' | Pet Name:', petName, ' | Pet Type:', petType);

    addStudent(studentName.trim(), petName.trim(), petType.trim())
    studentName = ''
    petName = ''
    petType = ''
  }
</script>

<form onsubmit={handleSubmit}>
    <div class="form-option">
        <label for="student-name">Student Name:</label>
        <input bind:value={studentName} required placeholder="Example: Jane Doe" name="student-name" />
    </div>

    <div class="form-option">
        <label for="pet-type">Pet Type:</label>
        <input bind:value={petType} placeholder="Example: Dog" name="pet-type" />
    </div>

    <div class="form-option">
        <label for="pet-name">Pet Name:</label>
        <input bind:value={petName} placeholder="Example: Fluffy" name="pet-name" />
    </div>

    <button type="submit">Submit</button>
</form>