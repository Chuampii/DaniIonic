<template>
  <ion-page>
    <ion-content :fullscreen="true" class="home-content">
      <div class="home-background">
        <img :src="imagenFondo" alt="Background" class="background-image" />
      </div>
      
      <div class="home-container">
        <div class="title-section">
          <h1 class="parked-title">PARKED?</h1>
        </div>

        <div class="buttons-section">
          <router-link to="/iniciar-sesion">
            <ion-button expand="block" class="login-button">
              LOG IN
            </ion-button>
          </router-link>
          <router-link to="/registrarse">
            <ion-button expand="block" class="signup-button">
              SIGN UP
            </ion-button>
          </router-link>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonButton } from '@ionic/vue';
import imagenFondo from '/images/fondo.png';
</script>

<style scoped>
.home-content {
  --background: #000000;
}

.home-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 1;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.home-container {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 40px 20px 60px 20px;
}

.title-section {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.parked-title {
  font-size: 72px;
  font-weight: 900;
  color: #ffffff;
  margin: 0;
  letter-spacing: 4px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.buttons-section {
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

router-link {
  text-decoration: none;
  width: 100%;
  display: flex;
}

ion-button.login-button,
ion-button.signup-button {
  --background: #c41e3a;
  --background-hover: #a01830;
  --background-activated: #8b1628;
  --color: #ffffff;
  --border-radius: 25px;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 16px 40px;
}

@media (max-width: 600px) {
  .parked-title {
    font-size: 48px;
  }

  .buttons-section {
    max-width: 100%;
  }
}
</style>
