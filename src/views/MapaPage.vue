<template>
  <ion-page>
    <ion-content :fullscreen="true" class="mapa-content">
      <div class="mapa-container" ref="container" @mousedown="iniciarDrag" @touchstart="iniciarDrag" @mousemove="moverMapa" @touchmove="moverMapa" @mouseup="finalizarDrag" @touchend="finalizarDrag" @mouseleave="finalizarDrag">
        <img 
          ref="imageElement"
          :src="mapImage" 
          alt="Mapa" 
          class="mapa-image" 
          :style="{ transform: `translate(${posX}px, ${posY}px)` }"
          @load="obtenerDimensionesImagen"
        />
      </div>
      
      <!-- Botón de volver -->
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
import mapImage from '/images/mapapuig.png';

const router = useRouter();
const container = ref<HTMLElement>();
const imageElement = ref<HTMLImageElement>();
const posX = ref(0);
const posY = ref(0);
const isDragging = ref(false);
const dragStartX = ref(0);
const dragStartY = ref(0);
const lastX = ref(0);
const lastY = ref(0);
const imageWidth = ref(0);
const imageHeight = ref(0);

const iniciarDrag = (event: MouseEvent | TouchEvent) => {
  isDragging.value = true;
  const clientX = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
  const clientY = event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;
  
  dragStartX.value = clientX - lastX.value;
  dragStartY.value = clientY - lastY.value;
};

const moverMapa = (event: MouseEvent | TouchEvent) => {
  if (!isDragging.value) return;
  
  const clientX = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
  const clientY = event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;
  
  let newX = clientX - dragStartX.value;
  let newY = clientY - dragStartY.value;
  
  // Obtener dimensiones del contenedor
  const containerWidth = container.value?.clientWidth || window.innerWidth;
  const containerHeight = container.value?.clientHeight || window.innerHeight;
  
  // Obtener dimensiones reales de la imagen
  const realImageWidth = imageWidth.value || containerWidth * 1.5;
  const realImageHeight = imageHeight.value || containerHeight * 1.5;
  
  // Límites para el drag - asegurar que siempre se vea algo de la imagen
  const maxX = 0;
  const minX = -(realImageWidth - containerWidth);
  const maxY = 0;
  const minY = -(realImageHeight - containerHeight);
  
  newX = Math.max(Math.min(newX, maxX), minX);
  newY = Math.max(Math.min(newY, maxY), minY);
  
  posX.value = newX;
  posY.value = newY;
  lastX.value = newX;
  lastY.value = newY;
};

const finalizarDrag = () => {
  isDragging.value = false;
};

const obtenerDimensionesImagen = () => {
  if (imageElement.value) {
    imageWidth.value = imageElement.value.naturalWidth || imageElement.value.width;
    imageHeight.value = imageElement.value.naturalHeight || imageElement.value.height;
  }
};

onMounted(() => {
  // Cargar dimensiones cuando la imagen está lista
  if (imageElement.value && imageElement.value.complete) {
    obtenerDimensionesImagen();
  }
});

const volver = () => {
  router.back();
};
</script>

<style scoped>
.mapa-content {
  --background: #000000;
  position: relative;
  overflow: hidden;
}

.mapa-container {
  position: relative;
  width: 100%;
  height: 100%;
  cursor: grab;
  overflow: hidden;
}

.mapa-container:active {
  cursor: grabbing;
}

.mapa-image {
  width: 150%;
  height: auto;
  display: block;
  transition: transform 0s;
  user-select: none;
  min-width: 150%;
  object-fit: contain;
}

.back-button {
  position: fixed;
  top: 20px;
  left: 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  width: 55px;
  height: 55px;
  color: white;
  font-size: 28px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  padding: 0;
  z-index: 10;
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
