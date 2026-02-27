<template>
  <ion-page>
    <ion-content :fullscreen="true" class="ion-no-padding">
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
import { onMounted, ref } from 'vue';
import { arrowBack } from 'ionicons/icons';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const router = useRouter();
const mapContainer = ref(null);

onMounted(() => {
  const barcelonaCoords: [number, number] = [41.45572222, 2.20133333];

  
  setTimeout(() => {
    const map = L.map('map').setView(barcelonaCoords, 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    L.marker(barcelonaCoords)
      .addTo(map)
      .bindPopup('Parked');

    
    map.invalidateSize();
  }, 100); 
});

const volver = () => {
  router.back();
};
</script>

<style scoped>

.mapa-container {
  width: 100%;
  height: 100vh; 
  display: block;
}


.back-button {
  position: absolute; 
  top: 20px;
  right: 20px;
  background: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  color: black;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}


ion-content {
  --inner-padding-bottom: 0;
  --padding-top: 0;
  --padding-bottom: 0;
}
</style>