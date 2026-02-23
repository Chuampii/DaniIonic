<template>
  <ion-page>
    <ion-content :fullscreen="true" class="auth-content">
      <div class="auth-background">
        <img :src="imagenFondo" alt="Background" class="background-image" />
      </div>
      
      <div class="auth-container">
        <!-- Titulo -->
        <div class="title-section">
          <h1 class="auth-title">CREAR CUENTA</h1>
        </div>

        <!-- Formulario -->
        <div class="form-section">
          <ion-input 
            v-model="nombre" 
            type="text" 
            placeholder="NOMBRE..."
            class="auth-input"
          ></ion-input>
          
          <ion-input 
            v-model="correo" 
            type="email" 
            placeholder="CORREO..."
            class="auth-input"
          ></ion-input>
          
          <ion-input 
            v-model="contrasena" 
            type="password" 
            placeholder="CONTRASEÑA..."
            class="auth-input"
          ></ion-input>

          <!-- Botón -->
          <router-link to="/menu">
            <ion-button expand="block" class="auth-button">
              REGISTRARSE
            </ion-button>
          </router-link>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonButton, IonInput } from '@ionic/vue';
import { ref } from 'vue';
import imagenFondo from '/images/fondo.png';

const nombre = ref('');
const correo = ref('');
const contrasena = ref('');
</script>

<style scoped>
.auth-content {
  --background: #000000;
  position: relative;
}

.auth-background {
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

.auth-container {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding: 40px 20px 30px 20px;
}

.title-section {
  width: 100%;
  text-align: center;
  margin-bottom: 40px;
  margin-top: 20px;
}

.auth-title {
  font-size: 28px;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.form-section {
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

ion-input.auth-input {
  --background: rgba(255, 255, 255, 0.85);
  --color: #000000;
  --placeholder-color: #999999;
  border-radius: 20px;
  padding: 12px 20px;
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
}

router-link {
  text-decoration: none;
  width: 100%;
}

ion-button.auth-button {
  --background: #c41e3a;
  --background-hover: #a01830;
  --background-activated: #8b1628;
  --color: #ffffff;
  --border-radius: 25px;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 12px;
  padding: 14px 40px;
}

/* Responsive */
@media (max-width: 600px) {
  .auth-container {
    padding: 30px 15px 20px 15px;
  }

  .auth-title {
    font-size: 24px;
  }

  .form-section {
    max-width: 100%;
  }
}
</style>
