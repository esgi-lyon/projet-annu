<template>
  <v-container>
    <v-row class="justify-center">
      <v-col sm="7">
        <dynamic-form
          :form="form"
          @submitted="formSubmitted"
          @error="processErrrors"
        />
        <v-btn type="submit" :form="form.id">
          Submit
        </v-btn>
        <v-text v-if="error" class="red--text text--lighten-1">
          {{ error }}
        </v-text>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from 'vue'
import api from '../services/api'
import '@asigloo/vue-dynamic-forms/dist/themes/default.scss'

import {
  Validator,
  CheckboxField,
  TextField,
  SelectField,
  required
} from '@asigloo/vue-dynamic-forms';

export default defineComponent({
  name: "CourseAdd",
  setup() {
    let errors = null
    const form = ref({
      id: 'basic-demo',
      fields: {
        name: TextField({
          label: 'Nom',
          validations: [
            Validator({ validator: required, text: 'This field is required' }),
          ],
        }),
        desc: TextField({
          label: 'Description',
          validations: [
            Validator({ validator: required, text: 'This field is required' }),
          ],
        }),
        tags: TextField({
          label: 'Tags (séparés par des virgules)',
        }),
      },
    });

    function processErrrors(errs) {
      errors = errs
    }

    function formSubmitted(vals) {
      console.log(vals)
      api.put('/courses', vals)
    }

    return {
      form,
      processErrrors,
      formSubmitted,
      errors
    };
  },
});
</script>
