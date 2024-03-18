<script setup>

</script>

<template>
  <UDashboardPage>
    <UDashboardPanel class="grid grid-cols-2 ">
      <div class="flex items-center">
        <div class="grid grid-cols-2 gap-4 p-4">
          <NuxtLink to="/dashboard/index" class="bg-black rounded-lg p-10 flex justify-center items-center">
            <p class="text-white">DASHBOARD</p>
          </NuxtLink>
          <div class="bg-black rounded-lg p-10 flex justify-center items-center">
            <p class="text-white">Text</p>
          </div>
          <div class="bg-black rounded-lg p-10 flex justify-center items-center col-span-1">
            <p class="text-white">Text</p>
          </div>
        </div>
      </div>

    </UDashboardPanel>
  </UDashboardPage>

</template>
