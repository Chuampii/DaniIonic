<template>
  <ion-page>
    <ion-content :fullscreen="true" class="mapa-content">
      <div id="map" ref="mapContainer" class="mapa-container"></div>
      
      <button class="back-button" @click="volver">
        <ion-icon :icon="arrowBack"></ion-icon>
      </button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonIcon } from '@ionic/vue';
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import { arrowBack } from 'ionicons/icons';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const router = useRouter();
const mapContainer = ref<HTMLElement | null>(null);

onMounted(() => {
  if (mapContainer.value) {
    const coords: [number, number] = [41.45572222, 2.20133333];
    const map = L.map(mapContainer.value).setView(coords, 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    L.marker(coords).addTo(map);
  }
});

const volver = () => {
  router.back();
};
</script>

<style scoped>
.mapa-content {
  --background: transparent;
  position: relative;
  overflow: hidden;
}

.mapa-container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.back-button {
  position: fixed;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  width: 55px;
  height: 55px;
  color: black;
  font-size: 28px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  padding: 0;
  z-index: 10;
  color: black;
}

.back-button:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
  transform: scale(1.1);
}

.back-button:active {
  transform: scale(0.95);
}
</style>
