<template>
  <div>
    <typography
      v-if="title && title[0]"
      v-bind="title[0]"
      class="c-section__title"
    />
    <typography
      v-if="subtitle && subtitle[0]"
      v-bind="subtitle[0]"
      class="c-section__subtitle"
    />
    <typography
      v-if="description && description[0]"
      v-bind="description[0]"
      class="c-section__description"
    />
    <form @submit.prevent="submitForm" ref="form">
      <v-row class="mb-2" v-if="inputs">
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
              :error-messages="errors[input.settings[0].name]"
              hide-details="auto"
              @blur="validateField(input)"
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
              :error-messages="errors[input.settings[0].name]"
              hide-details="auto"
              @blur="validateField(input)"
            />
            <!-- <v-autocomplete
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
            /> -->
          </v-col>
        </template>
      </v-row>
      <div v-if="!submitted" class="d-flex align-baseline">
        <btn type="submit" v-bind="formButton[0]" :disabled="!isFormValid" />
        <p class="text-red font-weight-bold ml-4" v-if="error">
          An error occurred
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

export default {
  props: {
    inputs: {
      type: Array,
      default: () => [],
    },
    endpoint: String,
    title: {
      type: Array,
      default: () => [],
    },
    subtitle: {
      type: Array,
      default: () => [],
    },
    description: {
      type: Array,
      default: () => [],
    },
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
  },
  data() {
    return {
      form: {},
      submitted: false,
      error: false,
      errors: {},
    };
  },
  computed: {
    isFormValid() {
      return (
        Object.values(this.errors).every((error) => error === "") &&
        this.inputs.every((input) => this.form[input.settings[0].name])
      );
    },
  },
  methods: {
    iconValue(input, def) {
      return input.iconLocation === def ? input.icon : undefined;
    },
    validateField(input) {
      const name = input.settings[0].name;
      const value = this.form[name];
      let errorMessage = "";

      // Hardcoded validation logic for email, phone, and text fields
      if (input.settings[0].required && !value) {
        errorMessage = `${input.settings[0].label} is required`;
      } else if (name === "email" && value && !/.+@.+\..+/.test(value)) {
        errorMessage = "E-mail must be valid";
      } else if (
        name === "phone" &&
        value &&
        !/^\+?[1-9]\d{1,14}$/.test(value)
      ) {
        errorMessage = "Phone number must be valid";
      } else if (
        input.settings[0].minLength &&
        value.length < input.settings[0].minLength
      ) {
        errorMessage = `${input.settings[0].label} must be at least ${input.settings[0].minLength} characters`;
      }

      this.$set(this.errors, name, errorMessage);
    },
    async submitForm() {
      if (!this.isFormValid) return;

      try {
        await emailjs.send(
          this.serviceId,
          this.templateId,
          this.form,
          this.publicKey
        );
        this.submitted = true;
      } catch (error) {
        this.error = true;
        console.error("Error sending email", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
