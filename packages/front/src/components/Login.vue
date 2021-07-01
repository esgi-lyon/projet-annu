<template>
  <v-container fluid grid-list-md text-center>
    <v-alert v-model="alert" dark color="red">
      La clé n'est pas bonne !
    </v-alert>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card id="carteLogin" class="mx-auto transparent">
          <v-card-title class="justify-center headline">
            Call2Text
          </v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="name"
                :rules="nameRules"
                label="Nom"
                required
              />
              <v-text-field
                v-model="token"
                :rules="tokenRules"
                label="Clé d'accès"
                append-icon="mdi-arrow-right-bold-circle-outline"
                @click:append="validate"
                required
              />
              <p>
                Connectez vous à l'aide de la clé d'accès délivrée par votre
                chef de projet ou un autre collaborateur
              </p>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'
import api from '../services/api'

export default {
  data: () => ({
    valid: true,
    alert: false,
    name: '',
    token: '',
    nameRules: [
      (v) => !!v || 'Le nom est requis',
      (v) =>
        (v && v.length >= 4) || 'Le nom doit être supérieur à 4 caractères',
    ],
    tokenRules: [
      (v) => !!v || 'La clé est requise',
      (v) =>
        (v && v.length >= 10) || 'La clé doit être supérieure à 10 caractères',
    ],
  }),
  methods: {
    ...mapMutations('auth', ['login']),
    async validate() {
      if (this.$refs.form.validate()) {
        try {
          const data = await api.auth({ name: this.name, token: this.token })
          if (data) {
            this.login(data)
            this.$router.push('/')
          } else {
            throw Error('Error while fetching API')
          }
        } catch (e) {
          this.alert = true
        }
      }
    },
  },
}
</script>

<style scoped>
#carteLogin {
  margin-top: 50%;
}
</style>
