<script setup>
const isDarkMode = () => {
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode !== null) {
    return savedMode === 'true';
  }
  return false;
};

let darkMode = useState('darkMode', isDarkMode);

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
  localStorage.setItem('darkMode', darkMode.value.toString());
  if (darkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

onMounted(() => {
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode !== null) {
    darkMode.value = savedMode === 'true';
  } else {
    darkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  document.documentElement.classList.toggle('dark', darkMode.value);
  localStorage.setItem('darkMode', darkMode.value.toString());
});
</script>

<template>
  <UCard>
    <template #header>
      <h1 class="text-2xl font-bold">Spike Hub</h1>
      <UToggle
          color="red"
          on-icon="i-heroicons-moon-20-solid"
          off-icon="i-heroicons-sun-20-solid"
          :ui="{ inactive: 'bg-black' }"
          v-model="darkMode"
          @click="toggleDarkMode"/>
    </template>

    <slot />

    <template #footer>
      <footer class="mt-10 bottom-0 min-w-full bg-gray-800">
        <div id="linktree" class="flex justify-center mb-4 pt-5">
          <div class="flex justify-center items-center space-x-4">
            <a href="https://github.com/oiwawa" target="_blank"><img src="/images/github-mark-white.png" alt="Github Logo" class="h-10 md:h-12 w-10 md:w-12"></a>
          </div>
        </div>
        <p class="pb-5 opacity-70 text-center text-c_white text-xs tracking-widest uppercase">© Oiwawa 2024. All rights reserved.</p>
      </footer>
    </template>
  </UCard>
</template>
