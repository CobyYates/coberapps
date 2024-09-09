<template>
  <div>
    <typography
      v-if="title && title.length > 0"
      v-bind="title[0]"
      class="c-section__title"
    />
    <typography
      v-if="subtitle && subtitle.length > 0"
      v-bind="subtitle[0]"
      class="c-section__subtitle"
    />
    <typography
      v-if="description && description.length > 0"
      v-bind="description[0]"
      class="c-section__description"
    />
    <form @submit.prevent="submit" ref="form">
      <v-row class="mb-2">
        <template v-for="input in inputs" :key="input.i">
          <v-col cols="12" :md="input.settings[0].desktopColumns || 12">
            <v-text-field
              v-if="input.component == 'textField'"
              v-model="form[input.settings[0].name]"
              :for="input.settings[0].name"
              :name="input.settings[0].name"
              :variant="input.settings[0].variant"
              :label="input.settings[0].label"
              :prepend-icon="iconValue(input.settings[0], 'prepend')"
              :prepend-inner-icon="
                iconValue(input.settings[0], 'prepend-inner')
              "
              :append-icon="iconValue(input.settings[0], 'append')"
              :append-inner-icon="iconValue(input.settings[0], 'append-inner')"
              :density="input.settings[0].density"
              :flat="input.settings[0].flat"
              :placeholder="input.settings[0].placeholder"
              :rounded="input.settings[0].rounded"
              :clearable="input.clearable"
              :required="input.settings[0].required"
              :rules="getInputRules(input)"
              hide-details="auto"
            />
            <v-textarea
              v-if="input.component == 'textarea'"
              v-model="form[input.settings[0].name]"
              :for="input.settings[0].name"
              :name="input.settings[0].name"
              :variant="input.settings[0].variant"
              :label="input.settings[0].label"
              :prepend-icon="iconValue(input.settings[0], 'prepend')"
              :prepend-inner-icon="
                iconValue(input.settings[0], 'prepend-inner')
              "
              :append-icon="iconValue(input.settings[0], 'append')"
              :append-inner-icon="iconValue(input.settings[0], 'append-inner')"
              :density="input.settings[0].density"
              :flat="input.settings[0].flat"
              :placeholder="input.settings[0].placeholder"
              :rounded="input.settings[0].rounded"
              :required="input.settings[0].required"
              :rules="getInputRules(input)"
              hide-details="auto"
            />
            <v-autocomplete
              v-if="input.component == 'autocomplete'"
              v-model="form[input.settings[0].name]"
              :for="input.settings[0].name"
              :name="input.settings[0].name"
              :variant="input.settings[0].variant"
              :label="input.settings[0].label"
              :prepend-icon="iconValue(input.settings[0], 'prepend')"
              :prepend-inner-icon="
                iconValue(input.settings[0], 'prepend-inner')
              "
              :append-icon="iconValue(input.settings[0], 'append')"
              :append-inner-icon="iconValue(input.settings[0], 'append-inner')"
              :density="input.settings[0].density"
              :flat="input.settings[0].flat"
              :placeholder="input.settings[0].placeholder"
              :rounded="input.settings[0].rounded"
              hide-details="auto"
            />
            <v-radio-group
              v-if="input.component == 'radioGroup'"
              v-model="form[input.settings[0].name]"
              :for="input.settings[0].name"
              :name="input.settings[0].name"
              :variant="input.settings[0].variant"
              :label="input.settings[0].label"
              :prepend-icon="iconValue(input.settings[0], 'prepend')"
              :prepend-inner-icon="
                iconValue(input.settings[0], 'prepend-inner')
              "
              :append-icon="iconValue(input.settings[0], 'append')"
              :append-inner-icon="iconValue(input.settings[0], 'append-inner')"
              :density="input.settings[0].density"
              :flat="input.settings[0].flat"
              :placeholder="input.settings[0].placeholder"
              :rounded="input.settings[0].rounded"
              :required="input.settings[0].required"
            />
            <v-range-slider
              v-if="input.component == 'rangeSlider'"
              v-model="form[input.settings[0].name]"
              :for="input.settings[0].name"
              :name="input.settings[0].name"
              :variant="input.settings[0].variant"
              :label="input.settings[0].label"
              :prepend-icon="iconValue(input.settings[0], 'prepend')"
              :prepend-inner-icon="
                iconValue(input.settings[0], 'prepend-inner')
              "
              :append-icon="iconValue(input.settings[0], 'append')"
              :append-inner-icon="iconValue(input.settings[0], 'append-inner')"
              :density="input.settings[0].density"
              :flat="input.settings[0].flat"
              :placeholder="input.settings[0].placeholder"
              :rounded="input.settings[0].rounded"
              :required="input.settings[0].required"
              hide-details="auto"
            />
            <v-select
              v-if="input.component == 'select'"
              v-model="form[input.settings[0].name]"
              :for="input.settings[0].name"
              :items="input.items"
              item-value="value"
              item-title="text"
              :name="input.settings[0].name"
              :variant="input.settings[0].variant"
              :label="input.settings[0].label"
              :prepend-icon="iconValue(input.settings[0], 'prepend')"
              :prepend-inner-icon="
                iconValue(input.settings[0], 'prepend-inner')
              "
              :append-icon="iconValue(input.settings[0], 'append')"
              :append-inner-icon="iconValue(input.settings[0], 'append-inner')"
              :density="input.settings[0].density"
              :flat="input.settings[0].flat"
              :placeholder="input.settings[0].placeholder"
              :rounded="input.settings[0].rounded"
              :required="input.settings[0].required"
              hide-details="auto"
            />
            <v-slider
              v-if="input.component == 'slider'"
              v-model="form[input.settings[0].name]"
              :for="input.settings[0].name"
              :name="input.settings[0].name"
              :variant="input.settings[0].variant"
              :label="input.settings[0].label"
              :prepend-icon="iconValue(input.settings[0], 'prepend')"
              :prepend-inner-icon="
                iconValue(input.settings[0], 'prepend-inner')
              "
              :append-icon="iconValue(input.settings[0], 'append')"
              :append-inner-icon="iconValue(input.settings[0], 'append-inner')"
              :density="input.settings[0].density"
              :flat="input.settings[0].flat"
              :placeholder="input.settings[0].placeholder"
              :rounded="input.settings[0].rounded"
              hide-details="auto"
            />
            <v-switch
              v-if="input.component == 'switch'"
              v-model="form[input.settings[0].name]"
              :for="input.settings[0].name"
              :name="input.settings[0].name"
              :variant="input.settings[0].variant"
              :label="input.settings[0].label"
              :prepend-icon="iconValue(input.settings[0], 'prepend')"
              :prepend-inner-icon="
                iconValue(input.settings[0], 'prepend-inner')
              "
              :append-icon="iconValue(input.settings[0], 'append')"
              :append-inner-icon="iconValue(input.settings[0], 'append-inner')"
              :density="input.settings[0].density"
              :flat="input.settings[0].flat"
              :placeholder="input.settings[0].placeholder"
              :rounded="input.settings[0].rounded"
              hide-details="auto"
            />
          </v-col>
        </template>
      </v-row>
      <!-- <div class="g-recaptcha" :data-sitekey="recaptchaKey"></div> -->
      <div v-if="!submitted" class="d-flex align-baseline">
        <btn type="submit" v-bind="formButton[0]" @click="submitForm" />
        <p class="text-red font-weight-bold ml-4" v-if="error">
          An error occured
        </p>
      </div>
      <v-btn
        v-else-if="submitted"
        prepend-icon="mdi-check"
        size="large"
        color="success"
        disabled
        text="Sent"
      />
    </form>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";
// import { ref } from "vue";
// import { useGoogleRecaptcha } from "your-google-recaptcha-package";
// import { useApiData } from "your-api-package";
export default {
  // setup() {
  //   const formData = ref({}); // Initialize your formData object
  //   const isSubmitting = ref(false);
  //   const showSuccess = ref(false);
  //   const showFail = ref(false);

  //   const { executeRecaptcha } = useGoogleRecaptcha();

  //   const submitForm = async (values) => {
  //     isSubmitting.value = true;
  //     const { token } = await executeRecaptcha("submit");

  //     const bodyData = {
  //       ...formData.value,
  //       "g-recaptcha-response": token,
  //     };

  //     const { pending, error } = await useApiData(`/api/form_submissions`, {
  //       method: "post",
  //       cache: false,
  //       body: bodyData,
  //     });

  //     if (error.value) {
  //       isSubmitting.value = pending.value;
  //       showFail.value = true;
  //     } else {
  //       isSubmitting.value = pending.value;
  //       clearForm();
  //       showSuccess.value = true;
  //     }
  //   };

  //   const clearForm = () => {
  //     // Implement your logic to clear the form data here
  //   };

  //   // Optionally expose some variables or functions to the template
  //   return {
  //     formData,
  //     isSubmitting,
  //     showSuccess,
  //     showFail,
  //     submitForm,
  //   };
  // },
  data: () => ({
    name: "",
    form: {},
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    select: null,
    checkbox: false,
    submitted: false,
    error: false,
  }),
  props: {
    inputs: Array,
    endpoint: String,
    title: Array,
    subtitle: Array,
    description: Array,
    columns: String,
    publicKey: String,
    templateId: String,
    serviceId: String,
    formButton: {
      type: Array,
      default: () => [],
    },
    spacing: Array,
    required: Boolean,
    formMessage: String,
    // recaptchaSecret: String,
  },
  computed: {
    inputRules() {
      let result = (v) => !!v || `${this.input.settings[0].name} is required`;
      return `${result} is required`;
    },
    // recaptchaKey() {
    //   const result = this.recaptchaSecret
    //   console.log('RECAPTCHA_KEY',result)
    //   return result
    // }
  },
  methods: {
    getInputRules(input) {
      const name = input.settings[0].name;
      const rules = [];

      if (input.settings[0].required) {
        rules.push((v) => !!v || `${name} is required`);
      }

      if (input.settings[0].name === "email") {
        rules.push((v) => /.+@.+\..+/.test(v) || "E-mail must be valid");
      }

      return rules;
    },
    async validate() {
      const { valid } = await this.$refs.form.validate();

      if (valid) alert("Form is valid");
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    iconValue(input, def) {
      let result;
      if (input.iconLocation == def) {
        result = input.icon;
      }
      return result;
    },
    async submitForm() {
      const recaptchaResponse = grecaptcha.getResponse();
      if (!recaptchaResponse) {
        alert("Please complete the reCAPTCHA");
        return;
      }
      let form = this.form;
      // form["g-recaptcha-response"] = recaptchaResponse;
      form.formMessage =
        this.formMessage.replace(`{email}`, form.email) || null;
      const serviceId = this.serviceId;
      const publicKey = this.publicKey;
      const templateId = this.templateId;
      const confirmationTemplateID =
        process.env.EMAIL_JS_CONFIRMATION_TEMPLATE_ID;
      try {
        const response = await emailjs
          .send(serviceId, templateId, form, publicKey)
          .then(() => {
            this.submitted = true;
            if (confirmationTemplateID) {
              const reply = emailjs.send(
                serviceId,
                publicKey,
                confirmationTemplateID
              );
            }
          });
      } catch (error) {
        this.error = true;
        console.error("Error sending email", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
