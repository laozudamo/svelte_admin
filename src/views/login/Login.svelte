<script>
  import { Button, Modal, Label, Input, Checkbox } from 'flowbite-svelte'
  import { navigateTo } from 'svelte-router-spa'

  let form = {
    email: '',
    pwd: '',
  }

  function navtoMain() {
    navigateTo('/')
    console.log('我要去主页')
  }
</script>

<main
  class="flex justify-end items-center bg-gradient-to-r from-green-400 to-blue-900"
>
  <form
    class="from-width bg-white border-gray-300 border-2 p-4 mr-20 rounded-2xl flex flex-col space-y-6"
    action="#"
  >
    <h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">
      Graceful Login
    </h3>
    <Label class="space-y-2">
      <span>Email</span>
      <Input
        value={form.email}
        type="email"
        name="email"
        placeholder="name@company.com"
        required
      />
    </Label>
    <Label class="space-y-2">
      <span>Your password</span>
      <Input
        value={form.pwd}
        type="password"
        name="password"
        placeholder="•••••"
        required
      />
    </Label>
    <div class="flex items-start">
      <Checkbox>Remember me</Checkbox>
      <a
        href="/"
        class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
        >Lost password?</a
      >
    </div>
    <Button size="sm" type="submit" class="w-full1" on:click={navtoMain}
      >Login to your account</Button
    >
    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
      Not registered? <a
        href="/"
        class="text-blue-700 hover:underline dark:text-blue-500"
        >Create account</a
      >
    </div>
  </form>
</main>

<style>
  .from-width {
    width: 400px;
  }
</style>
