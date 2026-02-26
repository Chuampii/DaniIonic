<template>
  <ion-page>
    <ion-content :fullscreen="true" class="edit-profile-content">
      <!-- Header con botón atrás -->
      <div class="edit-header">
        <button class="back-button" @click="volver">
          <ion-icon :icon="arrowBack"></ion-icon>
        </button>
      </div>

      <!-- Contenedor principal -->
      <div class="edit-profile-container">
        
        <!-- Foto de perfil -->
        <div class="photo-section">
          <img :src="profileData.foto" alt="Foto de perfil" class="profile-photo" />
          <button class="change-photo-button" @click="cambiarFoto">
            Cambiar Foto
          </button>
          <input
            ref="photoInput"
            type="file"
            accept="image/*"
            style="display: none"
            @change="handlePhotoChange"
          />
        </div>

        <!-- Formulario de edición -->
        <form class="profile-form" @submit.prevent="guardarPerfil">
          
          <!-- Campo Nombre -->
          <div class="form-group">
            <input
              v-model="profileData.nombre"
              type="text"
              placeholder="Nombre ..."
              class="form-input nombre-input"
            />
          </div>

          <!-- Campo Coche -->
          <div class="form-group">
            <input
              v-model="profileData.coche"
              type="text"
              placeholder="Coche ..."
              class="form-input coche-input"
            />
          </div>

          <!-- Campo Descripción "Sobre ti" -->
          <div class="form-group">
            <textarea
              v-model="profileData.descripcion"
              placeholder="Sobre ti...."
              class="form-input descripcion-input"
            ></textarea>
          </div>

          <!-- Botón SAVE -->
          <button type="submit" class="save-button">
            SAVE
          </button>
        </form>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonIcon } from '@ionic/vue';
import { useRouter } from 'vue-router';
import { arrowBack } from 'ionicons/icons';
import { ref } from 'vue';
import fotoperfil from '/images/fotoperfil.png';

const router = useRouter();
const photoInput = ref<HTMLInputElement>();

const profileData = ref({
  nombre: 'Tu Nombre',
  coche: 'Tu Coche',
  descripcion: 'Describe tu perfil aquí...',
  foto: fotoperfil
});

const volver = () => {
  router.back();
};

const cambiarFoto = () => {
  photoInput.value?.click();
};

const handlePhotoChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      profileData.value.foto = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }
};

const guardarPerfil = () => {
  console.log('Guardando perfil:', profileData.value);
  // Aquí iría la lógica para guardar los datos en una API o localStorage
  alert('Perfil guardado correctamente');
  router.back();
};
</script>

<style scoped>
.edit-profile-content {
  --background: #f5f5f5;
}

.edit-header {
  display: flex;
  align-items: center;
  padding: 15px 20px;
  background: white;
  border-bottom: 1px solid #e0e0e0;
}

.back-button {
  background: none;
  border: none;
  font-size: 24px;
  color: #333;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 40px;
  height: 40px;
}

.edit-profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
  gap: 25px;
}

.photo-section {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
}

.profile-photo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.change-photo-button {
  font-size: 12px;
  font-weight: 600;
  color: #333;
  background: white;
  border: 1px solid #ddd;
  padding: 6px 12px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.change-photo-button:hover {
  background: #f9f9f9;
  border-color: #bbb;
}

.profile-form {
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  width: 100%;
}

.form-input {
  width: 100%;
  border: none;
  border-radius: 25px;
  padding: 14px 18px;
  font-size: 14px;
  font-weight: 600;
  outline: none;
  transition: all 0.3s ease;
  font-family: inherit;
}

.nombre-input {
  background-color: #1a1a1a;
  color: #ffffff;
  min-height: 45px;
}

.nombre-input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.nombre-input:focus {
  background-color: #2a2a2a;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.coche-input,
.descripcion-input {
  background-color: #ff9966;
  color: #333333;
  resize: none;
}

.coche-input::placeholder,
.descripcion-input::placeholder {
  color: rgba(51, 51, 51, 0.6);
}

.coche-input:focus,
.descripcion-input:focus {
  background-color: #ff8844;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
}

.coche-input {
  min-height: 50px;
}

.descripcion-input {
  min-height: 180px;
  padding: 16px 18px;
}

.save-button {
  margin-top: 20px;
  padding: 14px 40px;
  border: none;
  border-radius: 25px;
  background-color: #ff3b3b;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: center;
}

.save-button:hover {
  background-color: #ff1a1a;
  transform: scale(1.05);
}

.save-button:active {
  transform: scale(0.95);
}
</style>
