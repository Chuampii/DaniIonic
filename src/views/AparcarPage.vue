<template>
  <ion-page>
    <ion-content :fullscreen="true" class="aparcar-content">
      <div class="parking-map">
        <img :src="parkingFondo" alt="parking" class="parking-image" />
        <div class="parking-title">ENTRADA</div>
        <div class="parking-grid">
          <button v-for="(spot, index) in parkingSpots" :key="index" class="parking-spot" @click="seleccionarPlaza(spot)">
            <img :src="spot.image" :alt="`Plaza ${spot.number}`" class="spot-image" />
            <div class="spot-number">{{ spot.number }}</div>
          </button>
        </div>
      </div>

      <div class="red-panel">
        <div class="buttons-container">
          <button class="action-button salir-btn" @click="abrirOverlay">SALIR</button>
          <button class="action-button comprobar-btn" @click="mostrarPrazaActual">COMPROVAR</button>
        </div>
        <button class="volver-btn" @click="volver">VOLVER</button>
      </div>

      <div v-if="showPrazaModal" class="plaza-modal" @click="showPrazaModal = false">
        <div class="plaza-card" @click.stop>
          <h2 class="plaza-message">ESTAS EN LA PLAZA NUMERO {{ plazaActual }}</h2>
          <button class="plaza-close-btn" @click="showPrazaModal = false">CERRAR</button>
        </div>
      </div>

      <div v-if="showStatusModal" class="status-modal" @click="cerrarStatusModal">
        <div class="status-card" @click.stop>
          <div :class="['status-icon', plazaSeleccionada?.libre ? 'libre' : 'ocupada']">
            {{ plazaSeleccionada?.libre ? '✓' : '✗' }}
          </div>
          <h2 class="status-title">{{ plazaSeleccionada?.title }}</h2>
          <p class="status-message">Plaza {{ plazaSeleccionada?.number }}: {{ plazaSeleccionada?.message }}</p>
          <div v-if="!plazaSeleccionada?.libre && plazaSeleccionada?.owner !== 'TÚ'" class="status-buttons-row">
            <button class="status-btn escribir-btn" @click="irAlChat">ESCRIBIR</button>
            <button class="status-btn salir-btn" @click="cerrarStatusModal">SALIR</button>
          </div>
          <button v-else class="status-close-btn" @click="cerrarStatusModal">CERRAR</button>
        </div>
      </div>

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
import plazaLibre from '/images/plazalibre.png';
import plazaOcupada from '/images/plazaocupada.png';

const router = useRouter();
const showOverlay = ref(false);
const showStatusModal = ref(false);
const showPrazaModal = ref(false);
const plazaSeleccionada = ref<any>(null);
const plazaActual = ref(13);

const parkingSpots = ref([
  { number: 1, image: plazaOcupada, libre: false, owner: 'JHON' },
  { number: 2, image: plazaOcupada, libre: false, owner: 'JHON' },
  { number: 3, image: plazaOcupada, libre: false, owner: 'JHON' },
  { number: 4, image: plazaOcupada, libre: false, owner: 'JHON' },
  { number: 5, image: plazaLibre, libre: true, owner: null },
  { number: 6, image: plazaLibre, libre: true, owner: null },
  { number: 7, image: plazaLibre, libre: true, owner: null },
  { number: 8, image: plazaLibre, libre: true, owner: null },
  { number: 9, image: plazaLibre, libre: true, owner: null },
  { number: 10, image: plazaOcupada, libre: false, owner: 'JHON' },
  { number: 11, image: plazaOcupada, libre: false, owner: 'JHON' },
  { number: 12, image: plazaOcupada, libre: false, owner: 'JHON' },
  { number: 13, image: plazaOcupada, libre: false, owner: 'JHON' },
  { number: 14, image: plazaOcupada, libre: false, owner: 'JHON' },
  { number: 15, image: plazaLibre, libre: true, owner: null },
  { number: 16, image: plazaLibre, libre: true, owner: null },
  { number: 17, image: plazaLibre, libre: true, owner: null },
  { number: 18, image: plazaLibre, libre: true, owner: null },
  { number: 19, image: plazaLibre, libre: true, owner: null },
  { number: 20, image: plazaOcupada, libre: false, owner: 'JHON' },
  { number: 21, image: plazaOcupada, libre: false, owner: 'JHON' },
  { number: 22, image: plazaOcupada, libre: false, owner: 'JHON' },
  { number: 23, image: plazaOcupada, libre: false, owner: 'JHON' },
  { number: 24, image: plazaOcupada, libre: false, owner: 'JHON' },
  { number: 25, image: plazaLibre, libre: true, owner: null },
  { number: 26, image: plazaLibre, libre: true, owner: null },
  { number: 27, image: plazaLibre, libre: true, owner: null },
]);

const seleccionarPlaza = (spot: any) => {
  if (!spot.libre && spot.owner === 'TÚ') {
    spot.libre = true;
    spot.image = plazaLibre;
    spot.owner = null;
    plazaSeleccionada.value = {
      number: spot.number,
      libre: true,
      owner: null,
      title: `HAS LIBERADO LA PLAZA ${spot.number}`,
      message: 'Plaza liberada exitosamente',
    };
    showStatusModal.value = true;
    return;
  }
  
  if (spot.libre) {
    spot.libre = false;
    spot.image = plazaOcupada;
    spot.owner = 'TÚ';
    plazaSeleccionada.value = {
      number: spot.number,
      libre: false,
      owner: 'TÚ',
      title: `HAS OCUPADO LA PLAZA ${spot.number}`,
      message: 'Plaza ocupada exitosamente por ti',
    };
    showStatusModal.value = true;
    return;
  }
  
  if (spot.number === 13 && !spot.libre) {
    showPrazaModal.value = true;
    return;
  }
  
  plazaSeleccionada.value = {
    number: spot.number,
    libre: spot.libre,
    owner: spot.owner,
    title: spot.libre ? 'PLAZA LIBRE' : `PLAZA OCUPADA POR ${spot.owner}`,
    message: spot.libre ? 'Esta plaza está disponible' : `Esta plaza está ocupada por ${spot.owner}`,
  };
  showStatusModal.value = true;
};

const mostrarPrazaActual = () => {
  showPrazaModal.value = true;
};

const irAlChat = () => {
  const ownerLower = plazaSeleccionada.value?.owner?.toLowerCase() || '';
  showStatusModal.value = false;
  router.push(`/chat/${ownerLower}`);
};

const cerrarStatusModal = () => {
  showStatusModal.value = false;
};

const volver = () => {
  router.back()
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
  --background: #d92020;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  justify-content: space-between;
}

.parking-map {
  flex: 1.2;
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

.parking-title {
  position: absolute;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  font-weight: 900;
  color: black;
  text-transform: uppercase;
  letter-spacing: 2px;
  z-index: 3;
}

.parking-grid {
  position: absolute;
  top: 50px;
  left: 16px;
  right: 16px;
  bottom: 0;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 1px;
  z-index: 2;
  overflow-y: auto;
  padding: 1px 0;
}

.parking-spot {
  aspect-ratio: 1 / 1;
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  border: none;
  padding: 0;
  background: none;
}

.parking-spot:active {
  transform: scale(0.95);
}

.spot-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  background: rgba(0, 0, 0, 0.1);
}

.spot-number {
  position: absolute;
  bottom: 2px;
  right: 2px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 9px;
  font-weight: 800;
  padding: 2px 3px;
  border-radius: 2px;
  z-index: 10;
}

.red-panel {
  background: #d92020;
  padding: 16px 20px 16px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin: 0;
  flex-shrink: 0;
  min-height: auto;
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
  padding: 12px 20px;
  width: 100%;
  max-width: 320px;
  text-align: center;
  border-radius: 26px;
  border: 2px solid rgba(0, 0, 0, 0.3);
}

.status-modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.status-card {
  width: 100%;
  max-width: 320px;
  background: white;
  border-radius: 16px;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.status-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: 900;
  color: white;
}

.status-icon.libre {
  background: #4caf50;
}

.status-icon.ocupada {
  background: #d92020;
}

.status-title {
  font-size: 22px;
  font-weight: 900;
  color: #333;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
}

.status-message {
  font-size: 14px;
  color: #666;
  margin: 0;
  text-align: center;
  line-height: 1.4;
}

.status-buttons-row {
  display: flex;
  gap: 12px;
  width: 100%;
  margin-top: 8px;
}

.status-btn {
  flex: 1;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.2s ease;
}

.escribir-btn {
  background: #4caf50;
  color: white;
}

.escribir-btn:active {
  opacity: 0.85;
}

.salir-btn {
  background: #d92020;
  color: white;
}

.salir-btn:active {
  opacity: 0.85;
}

.plaza-modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.plaza-card {
  width: 100%;
  max-width: 340px;
  background: #d92020;
  border-radius: 16px;
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.plaza-message {
  font-size: 32px;
  font-weight: 900;
  color: white;
  margin: 0;
  text-align: center;
  line-height: 1.3;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.plaza-close-btn {
  background: white;
  color: #d92020;
  border: none;
  border-radius: 8px;
  padding: 12px 32px;
  font-size: 16px;
  font-weight: 800;
  cursor: pointer;
  text-transform: uppercase;
  width: 100%;
}

.plaza-close-btn:active {
  opacity: 0.85;
}

.status-close-btn {
  background: #0066cc;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
  text-transform: uppercase;
  margin-top: 8px;
  width: 100%;
}

.status-close-btn:active {
  opacity: 0.85;
}

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
