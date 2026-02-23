<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
</script>

<style>
:root {
  --ion-background-color: #000000;
}

body {
  background-color: #000000;
}
</style>
