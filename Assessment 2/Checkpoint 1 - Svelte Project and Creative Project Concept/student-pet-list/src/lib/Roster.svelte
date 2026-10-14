<script>
    import { roster, removeStudent } from './RosterState.svelte.js'
</script>

<h2>Student Pet List</h2>

{#if roster.students.length === 0}
    <p>No students have been added yet.</p>

    {:else if roster.students.length > 0}
    <ul>
        {#each roster.students as student (student.id)}
        <li>
            {#if student.petName && student.petType}
                <p><strong>{student.name}</strong> has a pet {student.petType} called {student.petName}.</p>
            {:else if student.petName}
                <p><strong>{student.name}</strong> has a pet called {student.petName}.</p>
            {:else if student.petType}
                <p><strong>{student.name}</strong> has a pet {student.petType}.</p>
            {:else if !student.petName && !student.petType}
                <p class="no-pet"><strong>{student.name}</strong> has no pet listed yet.</p>
            {/if}
            <button type="button" onclick={() => removeStudent(student.id)}>Remove Student</button>
        </li>
        {/each}
    </ul>

{/if}

<button type="button" onclick={() => roster.students = []}>Clear Roster</button>
