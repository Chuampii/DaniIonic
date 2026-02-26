<template>
  <ion-page>
    <ion-content :fullscreen="true" class="register-content">
      <div class="register-background">
        <img :src="imagenFondo" alt="Background" class="background-image" />
      </div>
      
      <div class="register-container">
        <!-- Titulo CREAR CUENTA -->
        <div class="title-section">
          <h1 class="crear-cuenta-title">CREAR CUENTA</h1>
        </div>

        <!-- Formulario de registro -->
        <form class="register-form" @submit.prevent="handleRegister">
          <div class="form-group">
            <input
              v-model="formData.nombre"
              type="text"
              placeholder="NOMBRE..."
              class="form-input"
            />
          </div>

          <div class="form-group">
            <input
              v-model="formData.correo"
              type="email"
              placeholder="CORREO..."
              class="form-input"
            />
          </div>

          <div class="form-group">
            <input
              v-model="formData.contrasena"
              type="password"
              placeholder="CONTRASEÑA..."
              class="form-input"
            />
          </div>

          <button type="submit" class="register-button">
            ACCEDER
          </button>
        </form>

        <!-- Link para login -->
        <div class="login-link">
          <router-link to="/iniciar-sesion">
            ¿Ya tienes cuenta? Inicia sesión
          </router-link>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import imagenFondo from '/images/fondo.png';

const router = useRouter();

const formData = ref({
  nombre: '',
  correo: '',
  contrasena: ''
});

const handleRegister = async () => {
  if (!formData.value.nombre || !formData.value.correo || !formData.value.contrasena) {
    alert('Por favor completa todos los campos');
    return;
  }

  // Aquí iría la lógica de registro (API call)
  console.log('Registrando usuario:', formData.value);
  
  // Por ahora, solo redirigir a la página de inicio
  router.push('/inicio');
};
</script>

<style scoped>
.register-content {
  --background: #000000;
  position: relative;
}

.register-background {
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

.register-container {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 40px 20px;
}

.title-section {
  margin-bottom: 60px;
  text-align: center;
}

.crear-cuenta-title {
  font-size: 48px;
  font-weight: 900;
  color: #ffffff;
  margin: 0;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.register-form {
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  width: 100%;
}

.form-input {
  width: 100%;
  padding: 16px 20px;
  border: none;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.9);
  color: #666666;
  font-size: 14px;
  font-weight: 600;
  placeholder-shown: rgba(102, 102, 102, 0.7);
  outline: none;
  transition: all 0.3s ease;
}

.form-input:focus {
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

.form-input::placeholder {
  color: rgba(102, 102, 102, 0.7);
}

.register-button {
  margin-top: 30px;
  padding: 16px 20px;
  border: none;
  border-radius: 30px;
  background-color: #ff0000;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.register-button:hover {
  background-color: #cc0000;
  transform: scale(1.02);
}

.register-button:active {
  transform: scale(0.98);
}

.login-link {
  margin-top: 20px;
  text-align: center;
}

.login-link a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 12px;
  transition: color 0.3s ease;
}

.login-link a:hover {
  color: #ffffff;
}
</style>
