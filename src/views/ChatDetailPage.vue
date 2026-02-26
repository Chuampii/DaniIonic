<template>
  <ion-page>
    <ion-content :fullscreen="true" class="chat-detail-content">
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

      <div class="message-input-container">
        <input 
          ref="messageInputRef"
          v-model="newMessage" 
          type="text" 
          placeholder="Escribe un mensaje" 
          class="message-input"
          @keyup.enter="enviarMensaje"
          @focus="mostrarTeclado"
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
import { useRouter, useRoute } from 'vue-router';
import { ref } from 'vue';
import { arrowBack, mic, send } from 'ionicons/icons';
import fotoperfil from '/images/fotoperfil.png';
import Daniel from '/images/Daniel.png';
import Jhon from '/images/Jhon.png';
import Flupe from '/images/Flupe.png';
import Rusben from '/images/Rusben.png';
import Payo from '/images/Payo.png';
import PuroJuan from '/images/Puro Juan.png';
import Turro from '/images/Turro.png';
import Eros from '/images/Eros.png';
import JuanDeDios from '/images/Juan de dios.png';
import Marrash from '/images/Marrash.png';
import Gabriela from '/images/Gabriela.png';
import Pollete from '/images/Pollete.png';
import Tobias from '/images/Tobias.png';
import Jaime from '/images/Jaime.png';

const router = useRouter();
const route = useRoute();

const newMessage = ref('');
const userAvatar = fotoperfil;

const param = String(route.params.id || '').toLowerCase();

const contactsMap: Record<string, any> = {
  '1': { name: 'Daniel', avatar: Daniel },
  'daniel': { name: 'Daniel', avatar: Daniel },
  'jhon': { name: 'Jhon', avatar: Jhon },
  'flupe': { name: 'Flupe', avatar: Flupe },
  'rusben': { name: 'Rusben', avatar: Rusben },
  'payo': { name: 'Payo', avatar: Payo },
  'purojuan': { name: 'Puro Juan', avatar: PuroJuan },
  'turro': { name: 'Turro', avatar: Turro },
  'eros': { name: 'Eros', avatar: Eros },
  'juandedios': { name: 'Juan de dios', avatar: JuanDeDios },
  'marrash': { name: 'Marrash', avatar: Marrash },
  'gabriela': { name: 'Gabriela', avatar: Gabriela },
  'pollete': { name: 'Pollete', avatar: Pollete },
  'tobias': { name: 'Tobias', avatar: Tobias },
  'jaime': { name: 'Jaime', avatar: Jaime }
};

const contact = contactsMap[param] || { name: 'Contacto', avatar: fotoperfil };

const danielMessages = [
  { id: 1, sender: 'user', text: 'Hola Docente Daniel', image: null },
  { id: 2, sender: 'contact', text: 'Buenas querido alumno', image: null },
  { id: 3, sender: 'user', text: 'Como te va el día respetado docente', image: null },
  { id: 4, sender: 'contact', text: 'El Padre nuestro, también conocido como "Padre nuestro" en español, es la oración cristiana más emblemática, atribuida a Jesús de Nazaret según se relata en los Evangelios de Mateo y Lucas. Esta oración, escrita originalmente en griego, la lengua común del Mediterráneo oriental en el período helenístico, se ha transmitido en múltiples versiones, incluyendo la griega, latina y diversas lenguas modernas como el español, el hebreo, el arameo y las lenguas eslavas.', image: null },
  { id: 5, sender: 'user', text: 'Muchas gracias! pero como estas?', image: null },
  { id: 6, sender: 'contact', text: 'Con Cristo somos fuertes, pues en él siempre hay esperanza. Dios es quien nos sostiene, nos ayuda y nos cuida en medio de las tempestades de la vida. Todo lo mejor andando de la mano con Jesús, el Salvador.', image: null },
  { id: 7, sender: 'user', text: 'Me alegra oir eso de usted', image: null }
];

const jhonMessages = [
  { id: 1, sender: 'user', text: 'Usted rallo mi vehiculo?', image: null },
  { id: 2, sender: 'contact', text: 'Negativo compañero de institucion', image: null },
  { id: 3, sender: 'user', text: 'Agradezco la sinceridad', image: null },
  { id: 4, sender: 'contact', text: 'Usted sabe que yo aparco normalmente en la plaza 13 me queda lejos de usted.', image: null },
  { id: 5, sender: 'user', text: 'merci tt', image: null },
  { id: 6, sender: 'contact', text: 'De nada.', image: null },
  { id: 7, sender: 'user', text: 'Usted a aparcado en la plaza 13?', image: null },
  { id: 8, sender: 'contact', text: 'Honorable compañero estoy ubicado en la 13 a que se debe su pregunta ?', image: null },
  { id: 9, sender: 'user', text: 'Debido a tus grandes habilidades de estacionamiento impides mi salida del recinto escolar, agradeceria que movieras tu vehiculo si no supone una gran molestia para usted. gracias', image: null },
  { id: 10, sender: 'contact', text: 'Gracias por comunicarmelo en breves movere mi vehiculo lamento las molestias.', image: null }
];

const messages = ref<any[]>([]);
if (param === '1' || param === 'daniel') messages.value = [...danielMessages];
else if (param === 'jhon') messages.value = [...jhonMessages];

const volver = () => {
  router.back();
};

const enviarMensaje = () => {
  if (newMessage.value.trim()) {
    messages.value.push({ id: messages.value.length + 1, sender: 'user', text: newMessage.value, image: null });
    newMessage.value = '';
    setTimeout(() => {
      const container = document.querySelector('.messages-container');
      if (container) container.scrollTop = container.scrollHeight;
    }, 0);
  }
};

const mostrarTeclado = () => {
};
</script>

<style scoped>
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
  margin: 0;
}

.messages-container {
  flex: 1;
  overflow-y: auto;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.message {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  margin-bottom: 5px;
}

.contact-message {
  justify-content: flex-start;
}

.user-message {
  justify-content: flex-end;
}

.message-avatar {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  object-fit: cover;
}

.message-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 70%;
}

.user-message .message-content {
  align-items: flex-end;
}

.message-text {
  background: #0066cc;
  color: white;
  padding: 10px 12px;
  border-radius: 18px;
  margin: 0;
  font-size: 14px;
  word-wrap: break-word;
  line-height: 1.4;
}

.contact-message .message-text {
  background: #e8e8e8;
  color: #333;
}

.message-image {
  width: 150px;
  height: 150px;
  border-radius: 8px;
  object-fit: cover;
  margin-top: 5px;
}

.message-input-container {
  display: flex;
  align-items: center;
  padding: 12px 15px;
  background: white;
  border-top: 1px solid #e0e0e0;
  gap: 10px;
}

.message-input {
  flex: 1;
  border: none;
  background: #f0f0f0;
  border-radius: 20px;
  padding: 10px 15px;
  font-size: 14px;
  outline: none;
}

.message-input::placeholder {
  color: #999;
}

.mic-button,
.send-button {
  background: none;
  border: none;
  color: #0066cc;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 40px;
  height: 40px;
}

.send-button {
  background: #0066cc;
  color: white;
  border-radius: 50%;
  font-size: 18px;
}

@media (max-width: 600px) {
  .chat-header {
    padding: 12px 15px;
  }

  .contact-name {
    font-size: 14px;
  }

  .message-content {
    max-width: 85%;
  }

  .message-input {
    font-size: 13px;
  }
}
</style>
