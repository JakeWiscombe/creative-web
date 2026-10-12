<script>
  let count = $state(0);

  function increment() {
    count += 1;
  }
</script>

<div>
  <p>Hello, World! {count}</p>
  <button onclick={increment}>Click me</button>
</div>