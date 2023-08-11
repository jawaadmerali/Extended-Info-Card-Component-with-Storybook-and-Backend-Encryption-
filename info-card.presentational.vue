<template>
    <div :class="`info-card-presentational large inline flex vertical bg-default corner outline text-${textAlign} left`">
        <i v-if="iconClass.length" :class="`f1 circle large default disabled ${iconClass}`"></i>
        <div class="f4 text-bold">{{ headerText }}</div>
        <div>
            <p class="multipleline-2">{{ descriptionText }}</p>
        </div>
        <a v-if="buttonHref.length && buttonLabel.length" :href="buttonHref" class="btn cta">{{ buttonLabel }}</a>
    </div>
</template>

<script>
export default {
    name: 'InfoCardPresentational',
    props: {
      iconClass: {
        type: String,
        default: ''
      },
      headerText: String,
      descriptionText: String,
      buttonLabel: String,
      buttonHref: String,
      textAlign: {
        type: String,
        default: 'center',
      }
    },
};
</script>
