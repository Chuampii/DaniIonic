<template>
  <ion-page>
    <ion-content :fullscreen="true" class="chat-detail-content">
      <!-- Header -->
      <div class="chat-header">
        <button class="back-button" @click="volver">
          <ion-icon :icon="arrowBack"></ion-icon>
        </button>
        <div class="header-info">
          <img :src="contact.avatar" :alt="contact.name" class="header-avatar" />
          <div class="header-text">
            <h2 class="contact-name">{{ contact.name }}</h2>
            <p class="contact-status">● Online</p>
          </div>
        </div>
      </div>

      <!-- Mensajes -->
      <div class="messages-container">
        <div v-for="msg in messages" :key="msg.id" :class="['message', msg.sender === 'user' ? 'user-message' : 'contact-message']">
          <img v-if="msg.sender !== 'user'" :src="contact.avatar" :alt="contact.name" class="message-avatar" />
          <div class="message-content">
            <p class="message-text">{{ msg.text }}</p>
            <img v-if="msg.image" :src="msg.image" :alt="msg.text" class="message-image" />
          </div>
          <img v-if="msg.sender === 'user'" :src="userAvatar" :alt="'You'" class="message-avatar" />
        </div>
      </div>

      <!-- Input de mensaje -->
      <div class="message-input-container">
        <input 
          ref="messageInputRef"
          v-model="newMessage" 
          type="text" 
          placeholder="Escribe un mensaje" 
          class="message-input"
          @keyup.enter="enviarMensaje"
          autocomplete="off"
          inputmode="text"
        />
        <button class="mic-button">
          <ion-icon :icon="mic"></ion-icon>
        </button>
        <button class="send-button" @click="enviarMensaje">
          <ion-icon :icon="send"></ion-icon>
        </button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonIcon } from '@ionic/vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { arrowBack, mic, send } from 'ionicons/icons';
import Jhon from '/images/Jhon.png';
import fotoperfil from '/images/fotoperfil.png';

const router = useRouter();
const newMessage = ref('');
const userAvatar = fotoperfil;

const contact = {
  name: 'Jhon',
  avatar: Jhon,
  status: 'Online'
};

// messages will be filled later with the conversation you provide
const messages = ref<any[]>([]);

const volver = () => {
  router.back();
};

const enviarMensaje = () => {
  if (newMessage.value.trim()) {
    messages.value.push({
      id: messages.value.length + 1,
      sender: 'user',
      text: newMessage.value,
      image: null
    });
    newMessage.value = '';
    setTimeout(() => {
      const container = document.querySelector('.messages-container');
      if (container) container.scrollTop = container.scrollHeight;
    }, 0);
  }
};
</script>

<style scoped>
/* reuse same styles as ChatDetailPage */
.chat-detail-content {
  --background: #f5f5f5;
  display: flex;
  flex-direction: column;
}

.chat-header {
  display: flex;
  align-items: center;
  padding: 15px 20px;
  background: #e8e8e8;
  border-bottom: 1px solid #d0d0d0;
  gap: 12px;
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

.header-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.header-avatar {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
}

.header-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.contact-name {
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  color: #0066cc;
}

.contact-status {
  font-size: 12px;
  color: #4caf50;
}

.messages-container {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: linear-gradient(transparent, rgba(0,0,0,0.02));
}

.message {
  display: flex;
  align-items: flex-end;
  gap: 8px;
}

.contact-message {
  justify-content: flex-start;
}

.user-message {
  justify-content: flex-end;
}

.message-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
}

.message-content {
  max-width: 70%;
  background: #ffffff;
  border-radius: 12px;
  padding: 10px 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.06);
}

.user-message .message-content {
  background: #dcf8c6;
}

.message-text {
  margin: 0;
  font-size: 14px;
}

.message-image {
  margin-top: 8px;
  width: 100%;
  border-radius: 8px;
}

.message-input-container {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  background: #ffffff;
  border-top: 1px solid #e0e0e0;
}

.message-input {
  flex: 1;
  padding: 12px 14px;
  border-radius: 999px;
  border: 1px solid #e0e0e0;
  outline: none;
}

.mic-button,
.send-button {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
</style>