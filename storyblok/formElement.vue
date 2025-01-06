<template>
  <v-row v-editable="blok" class="c-form bg-black py-">
    <v-col class="pt-12 pb-16 bg-primary">
      <h2 class="text-h2 mb-8 text-center text-white">{{ blok?.title }}</h2>
      <p class="mb-10 text-center">{{ blok?.description }}</p>
      <v-row justify="center">
        <v-col cols="12" md="5">
          <v-form ref="formRef" v-model="isFormValid">
            <v-row>
              <v-col
                v-for="input in blok?.inputs"
                :key="input?.name"
                cols="12"
                :md="input?.width == '100%' ? 12 : 6"
              >
                <v-text-field
                  v-if="input?.type == 'textField'"
                  :placeholder="input?.placeholder"
                  v-model="form[input?.name]"
                  required
                  hide-details="auto"
                  variant="solo"
                  bg-color="white"
                />
                <v-select
                  v-else-if="input?.type == 'select'"
                  :placeholder="input?.placeholder"
                  v-model="form[input?.name]"
                  required
                  hide-details="auto"
                  variant="solo"
                  bg-color="white"
                  :items="options(input?.options)"
                />
                <v-textarea
                  v-else-if="input?.type == 'textArea'"
                  :placeholder="input?.placeholder"
                  v-model="form[input?.name]"
                  required
                  hide-details="auto"
                  variant="solo"
                  bg-color="white"
                />
              </v-col>
              <v-col cols="12">
                <v-btn
                  :disabled="!isFormValid"
                  color="white"
                  variant="outlined"
                  rounded="xl"
                  size="large"
                  @click="submitForm"
                >
                  Submit
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser";
const config = useRuntimeConfig();

defineProps({ blok: Object });

const formRef = ref(null);
const isFormValid = ref(false);

const form = ref({});

const rules = {
  required: (value) => !!value || "This field is required.",
  email: (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) || "Invalid email address.";
  },
  phone: (value) => {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return value === "" || phoneRegex.test(value) || "Invalid phone number.";
  },
};

const options = (value) => {
  return value?.split(",")?.map((value) => value?.trim());
};

const submitForm = async () => {
  const EMAILJS_SERVICE_ID = config?.public?.EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = config?.public?.EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = config?.public?.EMAILJS_PUBLIC_KEY;
  if (!formRef.value.validate()) {
    return;
  }

  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        ...form.value,
      },
      EMAILJS_PUBLIC_KEY
    );

    alert("Form submitted successfully!");
    form.value = {};
    formRef.value.resetValidation();
  } catch (error) {
    console.error("Failed to send email:", error);
    alert("Failed to submit the form. Please try again later.");
  }
};
</script>

<style lang="scss" scoped></style>
