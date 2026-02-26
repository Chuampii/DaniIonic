<template>
  <ion-page>
    <ion-content :fullscreen="true" class="inicio-content">
      <div class="inicio-background">
        <img :src="imagenFondo" alt="Background" class="background-image" />
      </div>
      
      <!-- Botón de perfil en esquina superior izquierda -->
      <button class="profile-button" @mousedown="mostrarPerfilOverlay" @touchstart="mostrarPerfilOverlay" @mouseup="ocultarPerfilOverlay" @touchend="ocultarPerfilOverlay" @mouseleave="ocultarPerfilOverlay">
        <img :src="fotoperfil" alt="Perfil" class="profile-image" />
      </button>
      
      <!-- Overlay de perfil -->
      <div v-if="showProfileOverlay" class="profile-overlay">
        <img :src="fotoperfil" alt="Perfil" class="overlay-profile-image" />
      </div>
      
      <div class="inicio-container">
        <!-- Botones de acciones principales -->
        <div class="buttons-section">
          <button class="action-button aparcar-button" @click="aparcar">
            APARCAR
          </button>
          <button class="action-button buscar-button" @click="buscarDonde">
            DÓNDE ESTÁ?
          </button>
        </div>

        <!-- Sección inferior con menú -->
        <div class="bottom-section">
        </div>
        
        <!-- Botón de menú en esquina inferior derecha -->
        <button class="menu-button" @click="abrirMenu">
          <img :src="unionIcon" alt="Menu" class="menu-image" />
        </button>
        
        <!-- Botón cerrar sesión al final -->
        <button class="close-session-btn" @click="cerrarSesion">
          cerrar sesión
        </button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import imagenFondo from '/images/fondo.png';
import unionIcon from '/images/Union.png';
import fotoperfil from '/images/fotoperfil.png';

const router = useRouter();
const showProfileOverlay = ref(false);

const aparcar = () => {
  router.push('/aparcar');
};

const buscarDonde = () => {
  router.push('/mapa');
};

const abrirMenu = () => {
  router.push('/chat');
};

const cerrarSesion = () => {
  router.push('/iniciar-sesion');
};

const mostrarPerfilOverlay = () => {
  showProfileOverlay.value = true;
};

const ocultarPerfilOverlay = () => {
  showProfileOverlay.value = false;
};
</script>

<style scoped>
.inicio-content {
  --background: #000000;
  position: relative;
}

.inicio-background {
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

.inicio-container {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 40px 20px 80px 20px;
}

.buttons-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 280px;
  margin-top: 200px;
}

.action-button {
  padding: 18px 40px;
  border: none;
  border-radius: 30px;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
}

.aparcar-button,
.buscar-button {
  background: linear-gradient(135deg, #c41e3a 0%, #a01830 100%);
}

.action-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(196, 30, 58, 0.5);
}

.action-button:active {
  transform: translateY(-1px);
}

.bottom-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
}

.menu-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: transform 0.3s ease;
  z-index: 10;
}

.menu-button:hover {
  transform: scale(1.1);
}

.menu-image {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

.close-session-btn {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: transparent;
  border: none;
  color: #ff4444;
  font-size: 14px;
  font-weight: 900;
  text-transform: lowercase;
  cursor: pointer;
  transition: color 0.3s ease;
  padding: 0;
  z-index: 9;
}

.close-session-btn:hover {
  color: #ff6666;
}

.profile-button {
  position: fixed;
  top: 20px;
  left: 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  width: 55px;
  height: 55px;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;
}

.profile-button:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
  transform: scale(1.1);
}

.profile-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.profile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.overlay-profile-image {
  width: 85%;
  height: 85%;
  object-fit: contain;
  border-radius: 0;
}

/* Responsive */
@media (max-width: 600px) {
  .inicio-container {
    padding: 30px 15px 70px 15px;
  }

  .buttons-section {
    margin-top: 60px;
    max-width: 100%;
  }

  .action-button {
    font-size: 16px;
    padding: 16px 30px;
  }

  .menu-icon {
    width: 50px;
    height: 50px;
    font-size: 24px;
  }
}
</style>
