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
    <form @submit.prevent="submit">
      <template v-for="input in inputs" :key="input.i">
        <v-text-field
          v-if="input.component == 'textField'"
          v-model="form[input.settings[0].name]"
          :for="input.settings[0].name"
          :name="input.settings[0].name"
          :variant="input.settings[0].variant"
          :label="input.settings[0].label"
          :prepend-icon="iconValue(input.settings[0], 'prepend')"
          :prepend-inner-icon="iconValue(input.settings[0], 'prepend-inner')"
          :append-icon="iconValue(input.settings[0], 'append')"
          :append-inner-icon="iconValue(input.settings[0], 'append-inner')"
          :density="input.settings[0].density"
          :flat="input.settings[0].flat"
          :placeholder="input.settings[0].placeholder"
          :rounded="input.settings[0].rounded"
          :clearable="input.clearable"
          :required="input.settings[0].required"
        />
        <v-textarea
          v-if="input.component == 'textarea'"
          v-model="form[input.settings[0].name]"
          :for="input.settings[0].name"
          :name="input.settings[0].name"
          :variant="input.settings[0].variant"
          :label="input.settings[0].label"
          :prepend-icon="iconValue(input.settings[0], 'prepend')"
          :prepend-inner-icon="iconValue(input.settings[0], 'prepend-inner')"
          :append-icon="iconValue(input.settings[0], 'append')"
          :append-inner-icon="iconValue(input.settings[0], 'append-inner')"
          :density="input.settings[0].density"
          :flat="input.settings[0].flat"
          :placeholder="input.settings[0].placeholder"
          :rounded="input.settings[0].rounded"
          :required="input.settings[0].required"
        />
        <v-autocomplete
          v-if="input.component == 'autocomplete'"
          v-model="form[input.settings[0].name]"
          :for="input.settings[0].name"
          :name="input.settings[0].name"
          :variant="input.settings[0].variant"
          :label="input.settings[0].label"
          :prepend-icon="iconValue(input.settings[0], 'prepend')"
          :prepend-inner-icon="iconValue(input.settings[0], 'prepend-inner')"
          :append-icon="iconValue(input.settings[0], 'append')"
          :append-inner-icon="iconValue(input.settings[0], 'append-inner')"
          :density="input.settings[0].density"
          :flat="input.settings[0].flat"
          :placeholder="input.settings[0].placeholder"
          :rounded="input.settings[0].rounded"
        />
        <v-radio-group
          v-if="input.component == 'radioGroup'"
          v-model="form[input.settings[0].name]"
          :for="input.settings[0].name"
          :name="input.settings[0].name"
          :variant="input.settings[0].variant"
          :label="input.settings[0].label"
          :prepend-icon="iconValue(input.settings[0], 'prepend')"
          :prepend-inner-icon="iconValue(input.settings[0], 'prepend-inner')"
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
          :prepend-inner-icon="iconValue(input.settings[0], 'prepend-inner')"
          :append-icon="iconValue(input.settings[0], 'append')"
          :append-inner-icon="iconValue(input.settings[0], 'append-inner')"
          :density="input.settings[0].density"
          :flat="input.settings[0].flat"
          :placeholder="input.settings[0].placeholder"
          :rounded="input.settings[0].rounded"
          :required="input.settings[0].required"
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
          :prepend-inner-icon="iconValue(input.settings[0], 'prepend-inner')"
          :append-icon="iconValue(input.settings[0], 'append')"
          :append-inner-icon="iconValue(input.settings[0], 'append-inner')"
          :density="input.settings[0].density"
          :flat="input.settings[0].flat"
          :placeholder="input.settings[0].placeholder"
          :rounded="input.settings[0].rounded"
          :required="input.settings[0].required"
        />
        <v-slider
          v-if="input.component == 'slider'"
          v-model="form[input.settings[0].name]"
          :for="input.settings[0].name"
          :name="input.settings[0].name"
          :variant="input.settings[0].variant"
          :label="input.settings[0].label"
          :prepend-icon="iconValue(input.settings[0], 'prepend')"
          :prepend-inner-icon="iconValue(input.settings[0], 'prepend-inner')"
          :append-icon="iconValue(input.settings[0], 'append')"
          :append-inner-icon="iconValue(input.settings[0], 'append-inner')"
          :density="input.settings[0].density"
          :flat="input.settings[0].flat"
          :placeholder="input.settings[0].placeholder"
          :rounded="input.settings[0].rounded"
        />
        <v-switch
          v-if="input.component == 'switch'"
          v-model="form[input.settings[0].name]"
          :for="input.settings[0].name"
          :name="input.settings[0].name"
          :variant="input.settings[0].variant"
          :label="input.settings[0].label"
          :prepend-icon="iconValue(input.settings[0], 'prepend')"
          :prepend-inner-icon="iconValue(input.settings[0], 'prepend-inner')"
          :append-icon="iconValue(input.settings[0], 'append')"
          :append-inner-icon="iconValue(input.settings[0], 'append-inner')"
          :density="input.settings[0].density"
          :flat="input.settings[0].flat"
          :placeholder="input.settings[0].placeholder"
          :rounded="input.settings[0].rounded"
        />
      </template>
      <form-button class="" type="submit" v-bind="formButton" />
    </form>
  </div>
</template>

<script>
import FormButton from "../Buttons/formButton.vue";
export default {
  components: {
    FormButton,
  },
  data: () => ({
    name: "",
    form: {},
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    select: null,
    checkbox: false,
  }),

  props: {
    inputs: Array,
    endpoint: String,
    title: Array,
    subtitle: Array,
    description: Array,
    columns: String,
    formId: String,
    formButton: Array,
    spacing: Array,
    required: Boolean,
  },

  methods: {
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
  },
};
</script>

<style lang="scss" scoped></style>
