<template>
  <ion-page>
    <ion-content :fullscreen="true" class="chat-content">
      <!-- Header -->
      <div class="chat-header">
        <button class="back-button" @click="volver">
          <ion-icon :icon="arrowBack"></ion-icon>
        </button>
        <h1 class="header-title">Mensajes</h1>
        <div class="header-actions">
          <button class="edit-button" @click="irAEditarPerfil">EDITAR</button>
            <button class="add-chat-button" @click="irAChatList">
              <span class="chat-plus">CHAT +</span>
            </button>
        </div>
      </div>

      <!-- Lista de chats -->
      <div class="chats-list">
        <div v-for="chat in chats" :key="chat.id" class="chat-item" @click="abrirChat(chat)">
          <img :src="chat.avatar" :alt="chat.name" class="chat-avatar" />
          <div class="chat-info">
            <h3 class="chat-name">{{ chat.name }}</h3>
            <p class="chat-message">chat</p>
          </div>
          <div v-if="chat.unread > 0" class="notification-badge">
            +{{ chat.unread }}
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonIcon } from '@ionic/vue';
import { useRouter } from 'vue-router';
import { arrowBack } from 'ionicons/icons';
import Daniel from '/images/Daniel.png';
import Justin from '/images/Justin.png';
import Pau from '/images/Pau.png';
import David from '/images/david.png';
import Mastantuono from '/images/Mastantuono.png';
import Marc from '/images/marc.png';
import Ozunal from '/images/ozunal.png';
import Maeb from '/images/maeb.png';
import Falete from '/images/falete.png';
import JeronimoNieto from '/images/Jeronimo Nieto.png';
import Pereira from '/images/pereira.png';
import Labrador from '/images/labrador.png';

const router = useRouter();

const chats = [
  { id: 1, name: 'Daniel', avatar: Daniel, unread: 1, message: '' },
  { id: 2, name: 'Justin', avatar: Justin, unread: 0, message: '' },
  { id: 3, name: 'Pau', avatar: Pau, unread: 0, message: '' },
  { id: 4, name: 'David', avatar: David, unread: 0, message: '' },
  { id: 5, name: 'Mastantuono', avatar: Mastantuono, unread: 0, message: '' },
  { id: 6, name: 'Marc', avatar: Marc, unread: 0, message: '' },
  { id: 7, name: 'Ozunal', avatar: Ozunal, unread: 0, message: '' },
  { id: 8, name: 'Maeb', avatar: Maeb, unread: 0, message: '' },
  { id: 9, name: 'Falete', avatar: Falete, unread: 0, message: '' },
  { id: 10, name: 'Jeronimo Nieto', avatar: JeronimoNieto, unread: 0, message: '' },
  { id: 11, name: 'Pereira', avatar: Pereira, unread: 0, message: '' },
  { id: 12, name: 'Labrador', avatar: Labrador, unread: 0, message: '' },
];

const volver = () => {
  router.back();
};

const irAEditarPerfil = () => {
  router.push('/editar-perfil');
};

const abrirChat = (chat: any) => {
  if (chat.id === 1) {
    // Solo abrir chat si es Daniel (id 1)
    router.push(`/chat/${chat.id}`);
  }
};

const irAChatList = () => {
  router.push('/chat-list');
};
</script>

<style scoped>
.chat-content {
  --background: #f5f5f5;
}

.chat-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  background: white;
  border-bottom: 1px solid #e0e0e0;
  gap: 10px;
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

.header-title {
  flex: 1;
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  text-align: center;
  color: #333;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.edit-button {
  background: none;
  border: none;
  color: #ff6b00;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
}

.add-chat-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
}

.chat-plus {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #ff6b00;
  border-radius: 50%;
  color: white;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
}

.chats-list {
  padding: 10px;
}

.chat-item {
  display: flex;
  align-items: center;
  padding: 12px;
  margin-bottom: 10px;
  background: white;
  border-radius: 12px;
  border: 2px solid #ff6b00;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.chat-item:active {
  transform: scale(0.98);
}

.chat-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 12px;
}

.chat-info {
  flex: 1;
}

.chat-name {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 4px 0;
  color: #333;
}

.chat-message {
  font-size: 12px;
  color: #ff6b00;
  margin: 0;
}

.notification-badge {
  width: 28px;
  height: 28px;
  background: #ff1744;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  font-weight: 600;
  margin-left: 8px;
}

/* Responsive */
@media (max-width: 600px) {
  .chat-header {
    padding: 12px 15px;
  }

  .header-title {
    font-size: 16px;
  }

  .chat-item {
    padding: 10px;
    margin-bottom: 8px;
  }

  .chat-avatar {
    width: 45px;
    height: 45px;
    margin-right: 10px;
  }

  .chat-name {
    font-size: 14px;
  }
}
</style>
