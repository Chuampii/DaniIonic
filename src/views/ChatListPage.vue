<template>
  <ion-page>
    <ion-content :fullscreen="true" class="chat-list-content">
      <div class="list-header">
        <button class="back-button" @click="volver">
          <ion-icon :icon="arrowBack"></ion-icon>
        </button>
        <h1 class="title">PUIGERS</h1>
      </div>

      <div class="contacts-list">
        <div v-for="contact in contacts" :key="contact.id" class="contact-item" @click="seleccionarContact(contact)">
          <img :src="contact.avatar" :alt="contact.name" class="contact-avatar" />
          <div class="contact-body">
            <h3 class="contact-name">{{ contact.name }}</h3>
            <p class="contact-sub">empezar a chatear</p>
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

const contacts = [
  { id: 'jhon', name: 'Jhon', avatar: Jhon },
  { id: 'flupe', name: 'Flupe', avatar: Flupe },
  { id: 'rusben', name: 'Rusben', avatar: Rusben },
  { id: 'payo', name: 'Payo', avatar: Payo },
  { id: 'purojuan', name: 'Puro Juan', avatar: PuroJuan },
  { id: 'turro', name: 'Turro', avatar: Turro },
  { id: 'eros', name: 'Eros', avatar: Eros },
  { id: 'juandedios', name: 'Juan de dios', avatar: JuanDeDios },
  { id: 'marrash', name: 'Marrash', avatar: Marrash },
  { id: 'gabriela', name: 'Gabriela', avatar: Gabriela },
  { id: 'pollete', name: 'Pollete', avatar: Pollete },
  { id: 'tobias', name: 'Tobias', avatar: Tobias },
  { id: 'jaime', name: 'Jaime', avatar: Jaime }
];

const volver = () => {
  router.back();
};

const seleccionarContact = (contact: any) => {
  router.push(`/chat/${contact.id}`);
};
</script>

<style scoped>
.chat-list-content {
  --background: #f5f5f5;
  padding-bottom: 20px;
}

.list-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  background: #f0f0f0;
  border-bottom: 1px solid #e0e0e0;
}

.title {
  flex: 1;
  text-align: center;
  margin: 0;
  font-weight: 700;
}

.contacts-list {
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  background: white;
  border-radius: 12px;
  padding: 10px;
  border: 2px solid rgba(255, 140, 0, 0.8);
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
}

.contact-avatar {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
}

.contact-body {
  display: flex;
  flex-direction: column;
}

.contact-name {
  font-size: 16px;
  font-weight: 800;
  margin: 0;
  color: #ff9900;
}

.contact-sub {
  font-size: 12px;
  color: #ff9900;
  margin: 2px 0 0 0;
}
</style>