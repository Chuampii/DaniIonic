<template>
  <ion-page>
    <ion-content :fullscreen="true" class="menu-content">
      <!-- Imagen del estacionamiento -->
      <div class="parking-section">
        <img :src="imagenEstacionamiento" alt="Estacionamiento" class="parking-image" />
      </div>

      <!-- Botones -->
      <div class="buttons-container">
        <ion-button expand="block" class="menu-button salir-button" @click="salir">
          SALIR
        </ion-button>
        <ion-button expand="block" class="menu-button comprobar-button" @click="comprobar">
          COMPROBAR
        </ion-button>
        <ion-button expand="block" class="menu-button volver-button" @click="volver">
          VOLVER
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonButton } from '@ionic/vue';
import { useRouter } from 'vue-router';
import imagenEstacionamiento from '/images/parking.png';

const router = useRouter();

const salir = () => {
  router.push('/home');
};

const comprobar = () => {
  console.log('Comprobar parking');
};

const volver = () => {
  router.go(-1);
};
</script>

<style scoped>
.menu-content {
  --background: #000000;
  display: flex;
  flex-direction: column;
  padding: 0;
}

.parking-section {
  flex: 1;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.parking-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.buttons-container {
  width: 100%;
  background: linear-gradient(135deg, #c41e3a 0%, #a01830 100%);
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

ion-button.menu-button {
  --background: rgba(255, 255, 255, 0.15);
  --background-hover: rgba(255, 255, 255, 0.25);
  --background-activated: rgba(255, 255, 255, 0.35);
  --color: #ffffff;
  --border-radius: 30px;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  padding: 16px 40px;
}

ion-button.salir-button {
  order: 1;
}

ion-button.comprobar-button {
  order: 2;
}

ion-button.volver-button {
  order: 3;
}

/* Responsive */
@media (max-width: 600px) {
  .buttons-container {
    padding: 20px 15px;
  }

  ion-button.menu-button {
    font-size: 14px;
    padding: 14px 30px;
  }
}
</style>
