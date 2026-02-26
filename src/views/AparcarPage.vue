<template>
  <ion-page>
    <ion-content :fullscreen="true" class="aparcar-content">
      <div class="parking-map">
        <img :src="parkingFondo" alt="parking" class="parking-image" />
      </div>

      <div class="red-panel">
        <div class="buttons-container">
          <button class="action-button salir-btn" @click="abrirOverlay">SALIR</button>
          <button class="action-button comprobar-btn">COMPROVAR</button>
        </div>
        <button class="volver-btn" @click="volver">VOLVER</button>
      </div>

      <!-- Overlay Modal -->
      <div v-if="showOverlay" class="overlay-modal" @click.self="cerrarOverlay">
        <div class="overlay-card">
          <img :src="parkingFondo" alt="parking" class="overlay-parking-img" />
          <div class="overlay-text-section">
            <h2 class="overlay-title">TIENES 15 MINUTOS PARA ABANDONAR TU PLAZA , MUCHAS GRACIAS POR USAR NUESTRA APP!</h2>
            <button class="overlay-close" @click="cerrarOverlay">VOLVER</button>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import parkingFondo from '/images/parkingfondo.png';

const router = useRouter();
const showOverlay = ref(false);

const volver = () => {
  router.back();
};

const abrirOverlay = () => {
  showOverlay.value = true;
};

const cerrarOverlay = () => {
  showOverlay.value = false;
};
</script>

<style scoped>
.aparcar-content {
  --background: #000;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
}

.parking-map {
  flex: 1;
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 0;
  min-height: 0;
}

.parking-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center bottom;
  display: block;
}

.red-panel {
  background: #d92020;
  padding: 24px 20px 190px 20px;
 
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  margin: 0;
  flex-shrink: 0;
}

.buttons-container {
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.action-button {
  width: 100%;
  padding: 14px 20px;
  border-radius: 26px;
  background: transparent;
  color: white;
  font-weight: 800;
  font-size: 16px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.2s ease;
}

.action-button:active {
  opacity: 0.85;
}

.volver-btn {
  background: transparent;
  border: none;
  color: white;
  font-weight: 800;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  padding: 8px 0;
}

/* Overlay Modal */
.overlay-modal {
  position: fixed;
  inset: 0;
  background: #d92020;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.overlay-card {
  width: 100%;
  max-width: 360px;
  height: 70vh;
  background: #d92020;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.overlay-parking-img {
  width: 100%;
  height: 40%;
  object-fit: cover;
}

.overlay-text-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 28px 20px;
}

.overlay-title {
  font-size: 24px;
  font-weight: 900;
  color: white;
  text-align: center;
  margin: 0;
  line-height: 1.3;
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

.overlay-close {
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 800;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  padding: 0;
}

.overlay-close:active {
  color: white;
}
</style>
