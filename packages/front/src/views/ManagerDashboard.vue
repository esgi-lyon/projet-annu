<template>
  <v-container>
    <v-row class="justify-center">
      <!-- <v-col class="mt-2">
        <h3>Liste</h3>
      </v-col> -->
      <v-col class="mt-2">
        <suspense>
        <div
          v-for="(item, index) in getUsers()"
          :key="item._id"
          :item="item"
          :index="index"
        >
          <v-card class="mx-auto text-center" max-width="900">
            <v-card-title primary-title class="justify-center">
              {{ item.email }}
            </v-card-title>
            <v-card-text>
              {{ item.role }}
            </v-card-text>
          </v-card>
        </div>
        </suspense>
      </v-col>

      <v-col sm="12">
        <h3>Créer un utilisateur</h3>
        <dynamic-form
          :form="form"
          @submitted="formSubmitted"
          @error="processErrrors"
        />
        <v-btn type="submit" :form="form.id">
          Submit
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from 'vue'
import '@asigloo/vue-dynamic-forms/dist/themes/default.scss'

import {
  Validator,
  CheckboxField,
  TextField,
  EmailField,
  SelectField,
  PasswordField,
  required
} from '@asigloo/vue-dynamic-forms';
import api from '../services/api'

export default defineComponent({
  name: "CourseAdd",
    setup() {
    async function getUsers() {
      return await api.get('/users')
    }

    const form = ref({
      id: 'basic-demo',
      fields: {
        firstName: TextField({
          label: 'Prénom',
          validations: [
            Validator({ validator: required, text: 'This field is required' }),
          ],
        }),
        lastName: TextField({
          label: 'Nom',
          validations: [
            Validator({ validator: required, text: 'This field is required' }),
          ],
        }),
        role: SelectField({
          label: 'type',
            options: [
            {
              value: 'COACH',
              label: 'Coach',
            },
            {
              value: 'TEACHER',
              label: 'Formateur',
            },
            {
              value: 'EXPERT',
              label: 'Expert',
            },
          ],
          validations: [
            Validator({ validator: required, text: 'This field is required' }),
          ],
        }),
        email: EmailField({
          label: 'Email',
          validations: [
            Validator({ validator: required, text: 'This field is required' }),
          ],
        }),
        password: PasswordField({
          label: 'Mot de passe',
          validations: [
            Validator({ validator: required, text: 'This field is required' }),
          ],
        })
      },
    });

    function processErrrors(errs) {
      console.error(errs)
    }

    function formSubmitted(vals) {
      api.put('/', vals)
    }

    return {
      form,
      processErrrors,
      formSubmitted,
      getUsers
    };
  },
});
</script>
